import React from "react";
const Header = () =>{
    return (


<header className="w-full sticky top-0 z-50 shadow-sm">

 <div className="flex justify-between bg-gray-900 text-white text-[11px] py-1.5 px-4 font-semibold">
    <span className="">Free Shipping on Orders Over $100</span>
  
  <div className="flex  gap-4 ">
    <span className=" hover:text-orange-400">TRACK ORDER</span>
    <span className=" hover:text-orange-400">HELP</span>
  </div>

  </div>


<div className="flex items-center justify-between gap-6 px-4 py-2 ">


{/* logo */}

<div className="p-3 font-extrabold  md:text-3xl  shrink-0 cursor-pointer">
<p className="text-orange-600">VIBE <span className="text-black">CART</span></p>
</div>

{/* search box */}

<div className="  flex flex-1 items-stretch">
    <input type="text" placeholder="Search for products, brands and more... " className="text-sm  px-5 py-2.5 w-full focus:border-orange-500 border-2 border-transparent rounded-l-md outline-none transition-all focus:bg-white" />
    <button className="bg-orange-600 text-lg  px-4  font-semibold text-white rounded-r-md">SEARCH</button>
</div>





{/* User Actions (Login, Wishlist, Cart */}

 <div className="flex items-center gap-6 shrink-0 ml-4 uppercase cursor-pointer ">

<div className="flex-col sm:flex hidden items-start leading-none cursor-pointer none">
    <span className=" text-[10px] text-gray-500 font-bold">Sign In</span>

<span className="font-bold hover:text-orange-500 transition">Account</span>
</div>


<div> 
    <span>❤️
</span>
</div>


<div>
    <span> 🛒</span>
</div>







 </div>






</div>

 















</header>
    );

}

export default Header;
