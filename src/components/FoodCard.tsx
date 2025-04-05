
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FoodItem } from '@/data/foodData';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = React.useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div 
      className="food-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Link to={`/food/${food.id}`} className="block relative">
        <div className="relative h-48 overflow-hidden group">
          <motion.img 
            src={food.image} 
            alt={food.name} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          {food.featured && (
            <Badge className="absolute top-2 right-2 bg-gradient-to-r from-brand-red to-brand-orange text-white font-medium px-2 py-1 z-10">
              Featured
            </Badge>
          )}
          
          <motion.button
            className={`absolute top-2 left-2 p-1.5 rounded-full ${isLiked ? 'bg-brand-red text-white' : 'bg-white/80 text-gray-700'} z-10`}
            onClick={toggleLike}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <Heart size={16} fill={isLiked ? "white" : "none"} />
          </motion.button>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full bg-white text-primary hover:bg-white/90 shadow-lg font-medium"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(food);
              }}
            >
              Quick View
            </Button>
          </motion.div>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/food/${food.id}`}>
            <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">{food.name}</h3>
          </Link>
          <motion.span 
            className="text-primary font-bold bg-orange-100 px-2 py-1 rounded-full text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ${food.price.toFixed(2)}
          </motion.span>
        </div>
        
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{food.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">{food.preparationTime}</span>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-primary text-white hover:bg-primary/90"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(food);
                    }}
                  >
                    <PlusCircle size={16} className="mr-1" />
                    Add to Cart
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add {food.name} to your cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
