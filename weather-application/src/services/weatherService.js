import axios from 'axios';

// OpenWeatherMap API configuration
const API_KEY = 'your_api_key_here'; // You'll need to get a free API key from openweathermap.org
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// For demo purposes, we'll use mock data when API key is not available
const MOCK_WEATHER_DATA = {
  london: {
    city: 'London',
    country: 'GB',
    temperature: 15,
    description: 'partly cloudy',
    humidity: 65,
    windSpeed: 3.2,
    pressure: 1013,
    feelsLike: 14,
    icon: '02d'
  },
  paris: {
    city: 'Paris',
    country: 'FR',
    temperature: 18,
    description: 'sunny',
    humidity: 55,
    windSpeed: 2.1,
    pressure: 1015,
    feelsLike: 19,
    icon: '01d'
  },
  tokyo: {
    city: 'Tokyo',
    country: 'JP',
    temperature: 22,
    description: 'clear sky',
    humidity: 70,
    windSpeed: 1.8,
    pressure: 1018,
    feelsLike: 23,
    icon: '01d'
  },
  newyork: {
    city: 'New York',
    country: 'US',
    temperature: 12,
    description: 'light rain',
    humidity: 80,
    windSpeed: 4.5,
    pressure: 1010,
    feelsLike: 10,
    icon: '10d'
  }
};

export const getWeatherData = async (city) => {
  try {
    // Check if we have a valid API key
    if (API_KEY === 'your_api_key_here') {
      // Use mock data for demo
      const cityKey = city.toLowerCase().replace(/\s+/g, '');
      const mockData = MOCK_WEATHER_DATA[cityKey] || MOCK_WEATHER_DATA.london;
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return {
        ...mockData,
        city: city, // Use the searched city name
      };
    }

    // Real API call (when API key is provided)
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    const data = response.data;

    return {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      feelsLike: data.main.feels_like,
      icon: data.weather[0].icon
    };

  } catch (error) {
    if (error.response) {
      // API responded with error
      switch (error.response.status) {
        case 404:
          throw new Error('City not found. Please check the city name and try again.');
        case 401:
          throw new Error('Invalid API key. Please check your configuration.');
        case 429:
          throw new Error('Too many requests. Please try again later.');
        default:
          throw new Error('Failed to fetch weather data. Please try again.');
      }
    } else if (error.request) {
      // Network error
      throw new Error('Network error. Please check your internet connection.');
    } else {
      // Other error
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};
