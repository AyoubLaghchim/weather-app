import React, { useState, useEffect } from 'react';
import WeatherForecast from './Meteo/WeatherForecast';
import SearchBar from './Meteo/SearchBar';
import Favorites from './Meteo/Favorites';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const fetchWeatherForecast = async (city) => {
    const apiKey = 'YOUR_API_KEY';  // Remplace avec ta clé API
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setForecast(data);  // Enregistre les prévisions dans l'état
    } catch (error) {
      console.error('Erreur lors de la récupération des prévisions:', error);
    }
  };

  const handleAddToFavorites = () => {
    const updatedFavorites = [...favorites, city];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const handleFavoriteClick = (city) => {
    setCity(city);  // Change la ville active en cliquant sur une ville favorite
    fetchWeatherForecast(city);  // Récupère les prévisions de cette ville
  };

  return (
    <div className="App">
      <SearchBar city={city} setCity={setCity} fetchWeatherForecast={fetchWeatherForecast} handleAddToFavorites={handleAddToFavorites} />
      <Favorites favorites={favorites} handleFavoriteClick={handleFavoriteClick} />
      {forecast && <WeatherForecast forecast={forecast} />}
    </div>
  );
};

export default App;
