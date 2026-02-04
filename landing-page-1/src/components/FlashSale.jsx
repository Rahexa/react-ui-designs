import React from 'react';
import ProductCard from './ProductCard';

const FlashSale = () => {
  const flashSales = [
    { id: 1, name: "iPhone 15 Pro Max", price: "$999", oldPrice: "$1099", discount: "-10%", img: "📱" },
    { id: 2, name: "Gaming Headset", price: "$150", oldPrice: "$200", discount: "-25%", img: "🎧" },
    { id: 3, name: "Nike Air Max", price: "$120", oldPrice: "$180", discount: "-33%", img: "👟" },
    { id: 4, name: "Smart Watch S8", price: "$60", oldPrice: "$80", discount: "-20%", img: "⌚" },
    { id: 5, name: "Mechanical Keyboard", price: "$45", oldPrice: "$90", discount: "-50%", img: "⌨️" },
  ];

  return (
    <section className="bg-white rounded-md shadow-sm overflow-hidden mt-6">
      <div className="bg-orange-500 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold uppercase italic tracking-tighter">⚡ Flash Sales</h2>
          <div className="hidden sm:flex gap-2 items-center text-sm font-medium bg-black/10 px-3 py-1 rounded">
            <span>On Sale Now</span>
            <span className="font-mono bg-white text-orange-600 px-1 rounded">04:20:10</span>
          </div>
        </div>
        <button className="text-sm font-bold uppercase hover:underline">See All ›</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {flashSales.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;