
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FoodItem } from '@/data/foodData';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface FoodCarouselProps {
  items: FoodItem[];
  title?: string;
}

const FoodCarousel: React.FC<FoodCarouselProps> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { addToCart } = useCart();
  const [direction, setDirection] = useState(0);

  // Handle autoplay
  useEffect(() => {
    let interval: number | undefined;

    if (autoplay) {
      interval = window.setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, items.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  if (!items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && (
        <motion.h2 
          className="text-2xl font-bold mb-4 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
      )}

      <div className="relative h-[300px] md:h-[500px] bg-black overflow-hidden">
        {/* Image Carousel */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              
              if (swipe < -swipeConfidenceThreshold) {
                goToNext();
              } else if (swipe > swipeConfidenceThreshold) {
                goToPrevious();
              }
            }}
            className="absolute inset-0"
          >
            <img 
              src={currentItem.image} 
              alt={currentItem.name} 
              className="w-full h-full object-cover transition-all duration-200"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Content */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{currentItem.name}</h2>
              <p className="text-sm md:text-lg mb-4 max-w-xl">{currentItem.description}</p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white group overflow-hidden relative">
                  <Link to={`/food/${currentItem.id}`} className="flex items-center">
                    <span className="relative z-10">View Details</span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-red opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary group relative overflow-hidden"
                  onClick={() => addToCart(currentItem)}
                >
                  <span className="relative z-10">Add to Cart - ${currentItem.price.toFixed(2)}</span>
                  <motion.span 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
          onClick={goToPrevious}
        >
          <ChevronLeft />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10"
          onClick={goToNext}
        >
          <ChevronRight />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCarousel;
