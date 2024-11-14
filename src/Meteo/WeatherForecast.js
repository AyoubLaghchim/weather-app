import React from 'react';

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="forecast">
      {forecast.list.map((item, index) => (
        <div key={index} className="forecast-item">
          <h3>{new Date(item.dt * 1000).toLocaleDateString()}</h3>  {/* Date de la prévision */}
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt={item.weather[0].description}
          />
          <p>{item.weather[0].description}</p>
          <p>{item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;

