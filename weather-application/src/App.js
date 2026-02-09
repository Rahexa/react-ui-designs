import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import { getWeatherData } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load weather for default city on app start
  useEffect(() => {
    handleSearch('London');
  }, []);

  const handleSearch = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="weather-container">
        <header className="header">
          <h1>🌤️ Weather App</h1>
          <p>Get current weather information for any city</p>
        </header>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {error && <div className="error-message">{error}</div>}
        
        {loading && <div className="loading">🔄 Loading weather data...</div>}
        
        {weatherData && !loading && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
