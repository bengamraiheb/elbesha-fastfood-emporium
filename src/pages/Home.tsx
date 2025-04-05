
import React from 'react';
import FoodCarousel from '@/components/FoodCarousel';
import CategorySection from '@/components/CategorySection';
import FoodCard from '@/components/FoodCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getFeaturedItems, getItemsByCategory } from '@/data/foodData';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredItems = getFeaturedItems();
  const burgers = getItemsByCategory('Burgers').slice(0, 4);
  
  return (
    <div>
      {/* Hero Carousel */}
      <section className="py-4 md:py-8">
        <div className="container">
          <FoodCarousel items={featuredItems} />
        </div>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Popular Items */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Burgers</h2>
            <Link to="/menu/burgers">
              <Button variant="link" className="text-primary">
                View All <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {burgers.map(burger => (
              <FoodCard key={burger.id} food={burger} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-12">
        <div className="container">
          <div className="bg-primary rounded-xl p-6 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <img 
                src="/images/burger-pattern.jpg" 
                alt="Pattern" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Download Our App & Get 20% Off
              </h2>
              <p className="text-white/90 mb-6">
                Order on our mobile app and enjoy exclusive discounts and rewards. Fast delivery, easy payment options, and much more!
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Google Play
                </Button>
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img src="/images/avatar-1.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The double bacon burger is amazing! Fast delivery and always hot. This is my go-to place for fast food."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img src="/images/avatar-2.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Jane Smith</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(4)}{'☆'.repeat(1)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I love their pizza! The crust is perfect and the toppings are always fresh. Highly recommended."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img src="/images/avatar-3.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Mike Johnson</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Best fast food in town! The spicy chicken sandwich is my favorite. Great service and reasonable prices."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
