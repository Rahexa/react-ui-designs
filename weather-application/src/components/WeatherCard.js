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
    <div className="weather-card">
      <h2 className="city-name">
        📍 {city}, {country}
      </h2>
      
      <div className="weather-icon">
        {getWeatherEmoji(icon)}
      </div>
      
      <div className="temperature">
        {Math.round(temperature)}°C
      </div>
      
      <div className="weather-description">
        {description}
      </div>
      
      <div className="weather-details">
        <div className="detail-card">
          <h3>Feels Like</h3>
          <p>{Math.round(feelsLike)}°C</p>
        </div>
        
        <div className="detail-card">
          <h3>Humidity</h3>
          <p>{humidity}%</p>
        </div>
        
        <div className="detail-card">
          <h3>Wind Speed</h3>
          <p>{windSpeed} m/s</p>
        </div>
        
        <div className="detail-card">
          <h3>Pressure</h3>
          <p>{pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
