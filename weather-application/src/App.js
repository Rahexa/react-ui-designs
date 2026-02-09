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
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-5">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 shadow-2xl text-white">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
              🌤️ Weather App
            </h1>
            <p className="text-lg opacity-90">Get current weather information for any city</p>
          </header>

          <SearchBar onSearch={handleSearch} loading={loading} />

          {error && (
            <div className="text-center bg-red-500/20 border border-red-400/30 text-red-200 p-4 rounded-2xl my-5">
              {error}
            </div>
          )}
          
          {loading && (
            <div className="text-center text-xl my-5 opacity-80">
              🔄 Loading weather data...
            </div>
          )}
          
          {weatherData && !loading && <WeatherCard data={weatherData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
