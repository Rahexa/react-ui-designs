import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center mb-8 gap-3">
      <input
        type="text"
        className="glass-input rounded-full px-6 py-3 text-white placeholder-white/70 text-lg outline-none min-w-[250px] md:min-w-[300px] focus:ring-2 focus:ring-white/30 transition-all duration-300 disabled:opacity-50"
        placeholder="Enter city name..."
        value={city}
        onChange={handleInputChange}
        disabled={loading}
      />
      <button 
        type="submit" 
        className="glass-input rounded-full px-6 py-3 text-white text-lg cursor-pointer transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        disabled={loading}
      >
        {loading ? '🔄' : '🔍'} Search
      </button>
    </form>
  );
};

export default SearchBar;
