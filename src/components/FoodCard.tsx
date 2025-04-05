
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FoodItem } from '@/data/foodData';
import { useCart } from '@/context/CartContext';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="food-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
      <Link to={`/food/${food.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={food.image} 
            alt={food.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {food.featured && (
            <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/food/${food.id}`}>
            <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">{food.name}</h3>
          </Link>
          <span className="text-primary font-bold">${food.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{food.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-500">{food.preparationTime}</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-primary border-primary hover:bg-primary hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              addToCart(food);
            }}
          >
            <PlusCircle size={16} className="mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
