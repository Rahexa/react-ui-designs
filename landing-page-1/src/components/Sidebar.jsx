import React from 'react';

const Sidebar = () => {
  const categories = [
    "Electronics", 
    "Fashion", 
    "Home & Garden", 
    "Sports", 
    "Beauty", 
    "Automotive",
    "Books",
    "Toys"
  ];

  return (
    <aside className="w-64 bg-white rounded-md shadow-sm hidden lg:block p-5 self-start border border-gray-100">
      <h3 className="font-bold text-gray-800 mb-5 uppercase text-xs tracking-widest border-b pb-2">
        Top Categories
      </h3>
      <ul className="space-y-4">
        {categories.map((cat, index) => (
          <li 
            key={index} 
            className="text-sm text-gray-600 hover:text-orange-500 hover:pl-2 cursor-pointer flex justify-between items-center transition-all duration-200 group"
          >
            <span className="group-hover:font-medium">{cat}</span>
            <span className="text-gray-300 group-hover:text-orange-500">›</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-100">
        <p className="text-xs text-orange-800 font-bold uppercase mb-1">New Member</p>
        <p className="text-[11px] text-orange-600">Get $10 off on your first order!</p>
      </div>
    </aside>
  );
};

export default Sidebar;