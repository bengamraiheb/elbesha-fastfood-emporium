
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, Trash2, Plus, Minus, ChevronLeft, 
  CreditCard, AlertTriangle 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart,
    totalPrice
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("This is a demo app. Checkout functionality would be implemented in a real application.");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 flex items-center">
          <ShoppingCart className="mr-2" /> Your Cart
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-muted-foreground mb-4 flex flex-col items-center">
            <ShoppingCart size={64} className="mb-4 opacity-30" />
            <p>Your cart is empty</p>
          </div>
          <Button onClick={() => navigate('/menu')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      <Button 
        variant="ghost" 
        className="mb-6" 
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Continue Shopping
      </Button>

      <h1 className="text-2xl font-bold mb-8 flex items-center">
        <ShoppingCart className="mr-2" /> Your Cart ({cartItems.length} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-6 last:mb-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Item Image */}
                    <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden mb-4 sm:mb-0 mr-0 sm:mr-4">
                      <Link to={`/food/${item.id}`}>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <Link 
                          to={`/food/${item.id}`}
                          className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="text-primary font-bold mt-2 sm:mt-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mt-1 mb-3">{item.description.substring(0, 100)}...</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => decreaseQuantity(item.id)}
                            className="h-8 w-8 rounded-none"
                          >
                            <Minus size={14} />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => increaseQuantity(item.id)}
                            className="h-8 w-8 rounded-none"
                          >
                            <Plus size={14} />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-8"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Separator className="mt-6" />
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-4 flex justify-between">
              <Button 
                variant="ghost" 
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={clearCart}
              >
                <Trash2 size={16} className="mr-2" /> Clear Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>$3.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${(totalPrice * 0.07).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(totalPrice + 3.99 + (totalPrice * 0.07)).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-md flex items-start">
                <AlertTriangle size={16} className="text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-amber-800">
                  This is a demo app. No real orders will be processed.
                </span>
              </div>
              
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleCheckout}
              >
                <CreditCard className="mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
