import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
  
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white tracking-tighter">
            VIBE<span className="text-orange-500">CART</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your one-stop destination for the latest gadgets, fashion, and home essentials. We provide quality products with the fastest delivery service.
          </p>
          <div className="flex gap-4 text-xl">
            <span className="hover:text-orange-500 cursor-pointer transition">Facebook</span> 
            <span className="hover:text-orange-500 cursor-pointer transition">Instagram</span>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Customer Care</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 cursor-pointer transition">Help Center</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Track Your Order</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Corporate & Bulk Purchasing</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Returns & Refunds</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-500 cursor-pointer transition">About VibeCart</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Terms & Conditions</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase text-xs tracking-widest">Newsletter</h3>
          <p className="text-xs text-gray-400">Subscribe to get special offers and once-in-a-lifetime deals.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-gray-800 border-none outline-none px-4 py-2 w-full text-sm rounded-l focus:ring-1 focus:ring-orange-500"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r font-bold text-xs transition">SUBSCRIBE</button>
          </div>
          <div>
             <p className="text-[10px] mb-3 font-bold uppercase text-gray-500">We Accept</p>
             <div className="flex gap-3 text-2xl grayscale opacity-70">
                <span>💳</span> <span>🏦</span> <span>💵</span>
             </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center">
        <p className="text-xs text-gray-500">
          © 2026 <span className="text-gray-300 font-semibold">VIBECART</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;