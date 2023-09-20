import React, { useEffect, useState } from 'react';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import shortid from 'shortid';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import css from './Favorites.module.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const [visibleAdverts, setVisibleAdverts] = useState(8);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavoriteAdverts(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = advertToRemove => {
    const updatedFavorites = favoriteAdverts.filter(
      favorite => favorite.id !== advertToRemove.id
    );
    setFavoriteAdverts(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const loadMore = () => {
    setVisibleAdverts(prevCount => prevCount + 8);
  };
  return (
    <div>
      {favoriteAdverts.length === 0 ? (
        <div>
          <p>You have no favorite advertisements.</p>
          <Link className={css.link} to="/catalog">
            Add car
          </Link>
        </div>
      ) : (
        <>
          <ul className={css.cardsContainer}>
            {favoriteAdverts.slice(0, visibleAdverts).map(favorite => (
              <CatalogItem
                key={shortid.generate()}
                advert={favorite}
                isFavorite={true}
                removeFromFavorites={removeFromFavorites}
                toggleFavoriteHandler={() => {}}
              />
            ))}
          </ul>
          {visibleAdverts < favoriteAdverts.length && (
            <LoadMoreBtn onClick={loadMore} />
          )}
        </>
      )}
    </div>
  );
};

export default Favorites;
