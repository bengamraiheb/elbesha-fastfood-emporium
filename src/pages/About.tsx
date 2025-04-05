
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">About El-Besha Fastfood</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="rounded-lg overflow-hidden mb-8">
          <img 
            src="/images/about-banner.jpg" 
            alt="About Us" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <p className="text-lg">
            Welcome to El-Besha Fastfood – where delicious meets fast, and quality meets convenience. 
            Since our founding in 2015, we've been committed to serving mouthwatering fast food 
            made from the finest ingredients.
          </p>
          
          <h2 className="text-xl font-bold mt-8">Our Story</h2>
          <p>
            El-Besha Fastfood was founded by food enthusiasts who believed that fast food 
            could be both delicious and made with quality ingredients. What started as a small 
            burger joint has now grown into a beloved chain with multiple locations, but our 
            commitment to quality and taste remains unchanged.
          </p>
          
          <h2 className="text-xl font-bold mt-8">Our Mission</h2>
          <p>
            Our mission is simple: to serve delicious, satisfying fast food that brings joy 
            to our customers. We believe in using fresh ingredients, perfecting our recipes, 
            and providing excellent service – all at a reasonable price.
          </p>
          
          <h2 className="text-xl font-bold mt-8">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">
                We source only the best ingredients for all our menu items, ensuring 
                that you get the most delicious fast food possible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">Unique Recipes</h3>
              <p className="text-gray-600">
                Our recipes have been perfected over the years, creating signature 
                tastes that keep our customers coming back for more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                We understand that your time is valuable, so we work efficiently to 
                serve your food quickly without compromising quality.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h2 className="text-xl font-bold mb-4">Ready to Experience Our Food?</h2>
            <Button asChild size="lg">
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
