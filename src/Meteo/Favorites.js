import React from 'react';

const Favorites = ({ favorites, handleFavoriteClick }) => {
  return (
    <div className="favorites">
      <h3>Villes Favorites :</h3>
      {favorites.length > 0 ? (
        favorites.map((fav, index) => (
          <button key={index} onClick={() => handleFavoriteClick(fav)}>
            {fav}
          </button>
        ))
      ) : (
        <p>Aucune ville favorite</p>
      )}
    </div>
  );
};

export default Favorites;
