import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 hover:shadow-xl transition-shadow cursor-pointer group border-r border-b border-gray-100 last:border-r-0">
      <div className="h-48 bg-gray-50 flex items-center justify-center text-6xl mb-4 rounded-lg relative overflow-hidden">
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded">
          {product.discount}
        </span>
        <div className="group-hover:scale-110 transition-transform duration-300">
          {product.img}
        </div>
      </div>

      <h4 className="text-sm text-gray-700 truncate mb-2 group-hover:text-orange-500 transition-colors">
        {product.name}
      </h4>
      
      <div className="flex items-center gap-2 mb-3">
        <span className="font-bold text-lg text-gray-900">{product.price}</span>
        <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
      </div>

      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
        <div className="w-[70%] h-full bg-orange-500 rounded-full"></div>
      </div>
      <p className="text-[10px] text-gray-500 uppercase font-bold text-right">
        6 Items Left
      </p>
    </div>
  );
};

export default ProductCard;