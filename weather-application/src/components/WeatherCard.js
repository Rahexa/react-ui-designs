import React from 'react';

const WeatherCard = ({ data }) => {
  const {
    city,
    country,
    temperature,
    description,
    humidity,
    windSpeed,
    pressure,
    feelsLike,
    icon
  } = data;

  // Get weather emoji based on weather condition
  const getWeatherEmoji = (iconCode) => {
    const emojiMap = {
      '01d': '☀️', '01n': '🌙',
      '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌧️', '09n': '🌧️',
      '10d': '🌦️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️'
    };
    return emojiMap[iconCode] || '🌤️';
  };

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">
        📍 {city}, {country}
      </h2>
      
      <div className="text-6xl my-6">
        {getWeatherEmoji(icon)}
      </div>
      
      <div className="text-6xl md:text-7xl font-bold my-6 drop-shadow-lg">
        {Math.round(temperature)}°C
      </div>
      
      <div className="text-2xl mb-8 capitalize opacity-90">
        {description}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm opacity-80 mb-2 uppercase tracking-wider font-medium">
            Feels Like
          </h3>
          <p className="text-2xl font-semibold">{Math.round(feelsLike)}°C</p>
        </div>
        
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm opacity-80 mb-2 uppercase tracking-wider font-medium">
            Humidity
          </h3>
          <p className="text-2xl font-semibold">{humidity}%</p>
        </div>
        
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm opacity-80 mb-2 uppercase tracking-wider font-medium">
            Wind Speed
          </h3>
          <p className="text-2xl font-semibold">{windSpeed} m/s</p>
        </div>
        
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm opacity-80 mb-2 uppercase tracking-wider font-medium">
            Pressure
          </h3>
          <p className="text-2xl font-semibold">{pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
