import React from "react";
import heroImg from "../assets/my-hero.jpg"; 

const Hero = () => {
  return (
    <section className="bg-white py-20 px-10 flex flex-col md:flex-row items-center justify-between">
      
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-slate-900 text-5xl font-extrabold leading-tight">
          Transform Your Business with <span className="text-blue-600">Digital Innovation</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          We provide cutting-edge IT solutions to help your business grow in the modern digital era. 
          From web development to AI integration.
        </p>
        <button className="bg-blue-600 mt-8 font-bold rounded-full px-8 py-3 hover:bg-blue-700 transition-all shadow-lg text-white">
          Get Started
        </button>
      </div>
<div className="relative md:w-1/2 flex justify-center">
  <div className="relative w-full max-w-md aspect-[4/3]">
    <img 
      src={heroImg} 
      alt="Hero"
      className="w-full h-full object-cover rounded-2xl shadow-lg"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent rounded-2xl"></div>
  </div>
</div>


    </section>
  );
}

export default Hero;