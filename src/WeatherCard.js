import React from 'react';

const WeatherCard = ({ data, theme }) => {
    const { name, main, weather, wind, dt } = data;

    const date = new Date(dt * 1000);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();

    return (
        <div className={`weather-card ${theme}`}>
            <h2>{name}</h2>
            <p>{dateString} {timeString}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Weather: {weather[0].description}</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>
        </div>
    );
};

export default WeatherCard;
