import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white py-20 px-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
          Transform Your Business with <span className="text-blue-600">Digital Innovation</span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg">
          We provide cutting-edge IT solutions to help your business grow in the modern digital era.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/500x350"
          alt="IT Solutions"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
}
