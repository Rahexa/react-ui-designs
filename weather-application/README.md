# Weather Application

A beautiful and responsive weather application built with React that displays current weather information for any city around the world.

## Features

- 🌤️ Real-time weather data
- 🔍 Search for any city worldwide
- 📱 Responsive design for all devices
- 🎨 Beautiful glassmorphism UI with Tailwind CSS
- ⚡ Fast and modern styling with utility classes
- 📊 Detailed weather information including:
  - Current temperature
  - Feels like temperature
  - Humidity
  - Wind speed
  - Atmospheric pressure
  - Weather description

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```
   cd weather-application
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. (Optional) Get a free API key from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up for a free account
   - Get your API key
   - Replace `your_api_key_here` in `src/services/weatherService.js` with your actual API key

5. Start the development server:
   ```
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

## Demo Mode

The application includes mock data so you can try it immediately without an API key. It includes sample data for:
- London
- Paris
- Tokyo
- New York

## Project Structure

```
src/
  ├── components/
  │   ├── SearchBar.js       # Search input component
  │   └── WeatherCard.js     # Weather display component
  ├── services/
  │   └── weatherService.js  # API service for weather data
  ├── App.js                 # Main application component
  ├── index.js              # Application entry point
  └── index.css             # Global styles
```

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API requests
- **OpenWeatherMap API** - Weather data provider

## Learning Objectives

This project demonstrates several key React concepts:

1. **Functional Components** - Modern React component structure
2. **Hooks** - useState and useEffect for state management
3. **Props** - Passing data between components
4. **Event Handling** - Form submission and user interactions
5. **API Integration** - Fetching data from external services
6. **Error Handling** - Graceful error management
7. **Conditional Rendering** - Showing/hiding UI elements
8. **Component Composition** - Breaking UI into reusable components

## Customization

You can customize the application by:

- Modifying the Tailwind classes for different color schemes
- Adding custom Tailwind utilities in the CSS file
- Adding more weather details to the WeatherCard component
- Implementing weather forecast functionality
- Adding location-based weather detection
- Including weather maps or charts

## API Key Setup

To use real weather data:

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Replace `your_api_key_here` in `src/services/weatherService.js` with your key

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes Create React App build tool (use with caution)

## Browser Support

This application works in all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the MIT License.
