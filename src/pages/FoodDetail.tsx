
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Clock, ShoppingCart, ChevronLeft, Plus, Minus, 
  ListChecks, Flame, HelpCircle 
} from 'lucide-react';
import { getItemById } from '@/data/foodData';
import { useCart } from '@/context/CartContext';
import { Alert, AlertDescription } from '@/components/ui/alert';

const FoodDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Get food item by ID
  const food = id ? getItemById(Number(id)) : undefined;

  if (!food) {
    return (
      <div className="container py-12 text-center">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <HelpCircle className="h-4 w-4" />
          <AlertDescription>
            Food item not found. The item may have been removed or the URL is incorrect.
          </AlertDescription>
        </Alert>
        <Button 
          variant="outline" 
          className="mt-6" 
          onClick={() => navigate('/menu')}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Menu
        </Button>
      </div>
    );
  }

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    // Add item to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(food);
    }
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="container py-8">
      <Button 
        variant="ghost" 
        className="mb-6" 
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Food Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={food.image} 
            alt={food.name} 
            className="w-full h-auto object-cover aspect-square"
          />
        </div>

        {/* Food Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{food.name}</h1>
          <div className="flex items-center mt-2 mb-4">
            <span className="text-lg font-bold text-primary mr-4">
              ${food.price.toFixed(2)}
            </span>
            {food.preparationTime && (
              <span className="flex items-center text-gray-600 text-sm">
                <Clock size={16} className="mr-1" /> {food.preparationTime}
              </span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{food.description}</p>

          {/* Food Metadata */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {food.calories && (
              <div className="flex items-center text-gray-700">
                <Flame size={16} className="mr-2 text-orange-500" />
                <span>{food.calories} calories</span>
              </div>
            )}
            {food.ingredients && (
              <div className="col-span-2">
                <h3 className="font-semibold flex items-center mb-2">
                  <ListChecks size={16} className="mr-2 text-primary" />
                  Ingredients
                </h3>
                <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {food.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-none"
                >
                  <Minus size={16} />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={increaseQuantity}
                  className="h-10 w-10 rounded-none"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            <Button 
              className="w-full sm:w-auto" 
              size="lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2" />
              Add to Cart - ${(food.price * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
