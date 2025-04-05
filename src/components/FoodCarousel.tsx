
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FoodItem } from '@/data/foodData';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

interface FoodCarouselProps {
  items: FoodItem[];
  title?: string;
}

const FoodCarousel: React.FC<FoodCarouselProps> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { addToCart } = useCart();

  // Handle autoplay
  useEffect(() => {
    let interval: number | undefined;

    if (autoplay) {
      interval = window.setInterval(() => {
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const currentItem = items[currentIndex];

  if (!items.length || !currentItem) return null;

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && (
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{title}</h2>
      )}

      <div className="relative h-[300px] md:h-[500px] bg-black">
        {/* Image */}
        <img 
          src={currentItem.image} 
          alt={currentItem.name} 
          className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{currentItem.name}</h2>
          <p className="text-sm md:text-lg mb-4 max-w-xl">{currentItem.description}</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white">
              <Link to={`/food/${currentItem.id}`}>View Details</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => addToCart(currentItem)}
            >
              Add to Cart - ${currentItem.price.toFixed(2)}
            </Button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
          onClick={goToPrevious}
        >
          <ChevronLeft />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
          onClick={goToNext}
        >
          <ChevronRight />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCarousel;
