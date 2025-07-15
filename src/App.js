import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import ToggleTheme from './ToggleTheme';
import ErrorMessage from './ErrorMessage';
import './App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState('');
    const [theme, setTheme] = useState('light');
    const [error, setError] = useState('');

    const API_KEY = 'a5134dcf0204f60342081b782a6d13ef';

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData([...weatherData, response.data]);
            setError('');
        } catch (error) {
            console.error('Error fetching weather data', error);
            if (error.response) {
                setError(`Error: ${error.response.data.message}`);
            } else if (error.request) {
                setError('Network error. Please try again.');
            } else {
                setError('Error fetching weather data. Please try again.');
            }
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (city) {
            fetchWeather(city);
            setCity('');
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`app ${theme}`}>
            <ToggleTheme toggleTheme={toggleTheme} currentTheme={theme} />
            <h1>Weather App</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter city or zip code"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {error && <ErrorMessage message={error} />}
            <div className="weather-container">
                {weatherData.map((data, index) => (
                    <WeatherCard key={index} data={data} theme={theme} />
                ))}
            </div>
        </div>
    );
};

export default App;
