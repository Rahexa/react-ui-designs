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
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name..."
        value={city}
        onChange={handleInputChange}
        disabled={loading}
      />
      <button 
        type="submit" 
        className="search-button"
        disabled={loading}
      >
        {loading ? '🔄' : '🔍'} Search
      </button>
    </form>
  );
};

export default SearchBar;
