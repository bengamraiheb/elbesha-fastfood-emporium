
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FoodCard from '@/components/FoodCard';
import { categories, getItemsByCategory } from '@/data/foodData';

const Menu: React.FC = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(
    category ? category.toLowerCase() : 'all'
  );

  // Convert category name from URL parameter to match data format
  const categoryName = categories.find(
    c => c.name.toLowerCase() === activeCategory
  )?.name;

  // Get items for the active category or all items if 'all' is selected
  const items = categoryName
    ? getItemsByCategory(categoryName)
    : categories.flatMap(c => getItemsByCategory(c.name));

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
      
      <Tabs 
        defaultValue={activeCategory} 
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted inline-flex h-auto flex-wrap justify-center p-1">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2"
            >
              All
            </TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat.id}
                value={cat.name.toLowerCase()}
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(item => (
              <FoodCard key={item.id} food={item} />
            ))}
          </div>
        </TabsContent>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.name.toLowerCase()} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getItemsByCategory(cat.name).map(item => (
                <FoodCard key={item.id} food={item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Menu;
