import React from 'react';

const SearchBar = ({ city, setCity, fetchWeatherForecast, handleAddToFavorites }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeatherForecast(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Entrez une ville"
      />
      <button onClick={handleSearch}>Rechercher</button>
      <button onClick={handleAddToFavorites}>Ajouter aux favoris</button>
    </div>
  );
};

export default SearchBar;
