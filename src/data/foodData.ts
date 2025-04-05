
export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  ingredients?: string[];
  preparationTime?: string;
  calories?: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Burgers",
    image: "/images/category-burger.jpg"
  },
  {
    id: 2,
    name: "Pizza",
    image: "/images/category-pizza.jpg"
  },
  {
    id: 3,
    name: "Chicken",
    image: "/images/category-chicken.jpg"
  },
  {
    id: 4,
    name: "Salads",
    image: "/images/category-salad.jpg"
  },
  {
    id: 5,
    name: "Desserts",
    image: "/images/category-dessert.jpg"
  },
  {
    id: 6,
    name: "Drinks",
    image: "/images/category-drinks.jpg"
  }
];

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheddar, fresh lettuce, tomato, and our special sauce on a toasted brioche bun",
    price: 9.99,
    image: "/images/classic-cheeseburger.jpg",
    category: "Burgers",
    featured: true,
    ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Special sauce", "Brioche bun"],
    preparationTime: "10 min",
    calories: 650
  },
  {
    id: 2,
    name: "Spicy Chicken Sandwich",
    description: "Crispy spicy chicken fillet with pickles, coleslaw, and spicy mayo on a toasted bun",
    price: 8.99,
    image: "/images/spicy-chicken-sandwich.jpg",
    category: "Chicken",
    featured: true,
    ingredients: ["Chicken fillet", "Spices", "Pickles", "Coleslaw", "Spicy mayo", "Toasted bun"],
    preparationTime: "12 min",
    calories: 580
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, fresh mozzarella, basil, and extra virgin olive oil",
    price: 12.99,
    image: "/images/margherita-pizza.jpg",
    category: "Pizza",
    featured: true,
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil"],
    preparationTime: "15 min",
    calories: 780
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    description: "Pizza topped with tomato sauce, mozzarella, and spicy pepperoni slices",
    price: 14.99,
    image: "/images/pepperoni-pizza.jpg",
    category: "Pizza",
    featured: true,
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Pepperoni"],
    preparationTime: "15 min",
    calories: 850
  },
  {
    id: 5,
    name: "Crispy Chicken Tenders",
    description: "Crispy breaded chicken tenders served with choice of dipping sauce",
    price: 7.99,
    image: "/images/chicken-tenders.jpg",
    category: "Chicken",
    featured: false,
    ingredients: ["Chicken breast", "Breading", "Spices", "Dipping sauce"],
    preparationTime: "12 min",
    calories: 450
  },
  {
    id: 6,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese",
    price: 6.99,
    image: "/images/caesar-salad.jpg",
    category: "Salads",
    featured: false,
    ingredients: ["Romaine lettuce", "Caesar dressing", "Croutons", "Parmesan cheese"],
    preparationTime: "5 min",
    calories: 320
  },
  {
    id: 7,
    name: "Double Bacon Burger",
    description: "Double beef patties with crispy bacon, cheese, and all the fixings",
    price: 12.99,
    image: "/images/bacon-burger.jpg",
    category: "Burgers",
    featured: true,
    ingredients: ["Double beef patties", "Bacon", "Cheese", "Lettuce", "Tomato", "Onion", "Special sauce"],
    preparationTime: "15 min",
    calories: 950
  },
  {
    id: 8,
    name: "Chocolate Milkshake",
    description: "Creamy chocolate milkshake topped with whipped cream and chocolate syrup",
    price: 4.99,
    image: "/images/chocolate-milkshake.jpg",
    category: "Drinks",
    featured: false,
    ingredients: ["Milk", "Chocolate ice cream", "Chocolate syrup", "Whipped cream"],
    preparationTime: "5 min",
    calories: 550
  },
  {
    id: 9,
    name: "Cheesecake",
    description: "Creamy New York-style cheesecake with a graham cracker crust",
    price: 5.99,
    image: "/images/cheesecake.jpg",
    category: "Desserts",
    featured: false,
    ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham cracker crust"],
    preparationTime: "Prepared fresh daily",
    calories: 450
  },
  {
    id: 10,
    name: "Grilled Chicken Salad",
    description: "Fresh mixed greens with grilled chicken, avocado, and balsamic dressing",
    price: 8.99,
    image: "/images/grilled-chicken-salad.jpg",
    category: "Salads",
    featured: false,
    ingredients: ["Mixed greens", "Grilled chicken", "Avocado", "Cherry tomatoes", "Balsamic dressing"],
    preparationTime: "10 min",
    calories: 380
  },
  {
    id: 11,
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie topped with vanilla ice cream and chocolate sauce",
    price: 6.99,
    image: "/images/chocolate-brownie.jpg",
    category: "Desserts",
    featured: true,
    ingredients: ["Chocolate", "Flour", "Sugar", "Eggs", "Vanilla ice cream", "Chocolate sauce"],
    preparationTime: "8 min",
    calories: 590
  },
  {
    id: 12,
    name: "Lemonade",
    description: "Freshly squeezed lemonade with just the right amount of sweetness",
    price: 3.99,
    image: "/images/lemonade.jpg",
    category: "Drinks",
    featured: false,
    ingredients: ["Lemon juice", "Water", "Sugar", "Mint (optional)"],
    preparationTime: "3 min",
    calories: 120
  }
];

export const getFeaturedItems = (): FoodItem[] => {
  return foodItems.filter(item => item.featured);
};

export const getItemsByCategory = (categoryName: string): FoodItem[] => {
  return foodItems.filter(item => item.category === categoryName);
};

export const getItemById = (id: number): FoodItem | undefined => {
  return foodItems.find(item => item.id === id);
};
