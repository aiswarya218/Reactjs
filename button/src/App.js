import React from 'react';
import { Card, CardContent } from './components/ui/Card';
import { Button } from './components/ui/button';
import { ShoppingCart, Clock, Star } from 'lucide-react';
import './App.css';

const restaurants = [
  {
    name: 'Burger Palace',
    image: 'https://source.unsplash.com/400x300/?burger',
    rating: 4.5,
    deliveryTime: '25 mins',
    cuisine: 'Fast Food'
  },
  {
    name: 'Sushi World',
    image: 'https://source.unsplash.com/400x300/?sushi',
    rating: 4.8,
    deliveryTime: '30 mins',
    cuisine: 'Japanese'  
  },
  {
    name: 'Pasta Corner',
    image: 'https://source.unsplash.com/400x300/?pasta',
    rating: 4.2,
    deliveryTime: '20 mins',
    cuisine: 'Italian'
  }
];

export default function DoorDashClone() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-red-600">DoorDash</h1>
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          className="border border-gray-300 rounded px-3 py-2 w-1/2"
        />
        <Button variant="outline"><ShoppingCart className="mr-2" />Cart</Button>
      </header>

      <section className="bg-red-100 text-center py-6">
        <h2 className="text-xl font-semibold">Free delivery on your first order!</h2>
      </section>

      <section className="p-4 flex gap-2 overflow-x-auto no-scrollbar">
        {['Pizza', 'Burgers', 'Sushi', 'Drinks', 'Desserts', 'Indian'].map((cat) => (
          <div
            key={cat}
            className="bg-white px-4 py-2 rounded-full shadow text-sm cursor-pointer hover:bg-red-200"
          >
            {cat}
          </div>
        ))}
      </section>

      <section className="px-4 py-2 flex gap-3 flex-wrap justify-center">
        <Button variant="secondary">Fastest Delivery</Button>
        <Button variant="secondary">Top Rated</Button>
        <Button variant="secondary">Under 30 mins</Button>
      </section>

      <section className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3">
        {restaurants.map((rest, index) => (
          <Card key={index} className="hover:shadow-lg">
            <img src={rest.image} alt={rest.name} className="rounded-t w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-1">{rest.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{rest.cuisine}</p>
              <div className="flex items-center text-sm text-gray-700 gap-4">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />{rest.rating}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />{rest.deliveryTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="fixed bottom-4 right-4">
        <Button className="rounded-full shadow-lg px-4 py-2">
          <ShoppingCart className="mr-2" />Checkout</Button>
      </div>

      <footer className="bg-white text-center text-sm text-gray-500 py-4 mt-10">
        © 2025 DoorDash Clone. Built by You.
      </footer>
    </div>
  );
} 