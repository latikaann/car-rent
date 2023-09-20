import React, { useEffect, useState } from 'react';
import axios from 'axios';
import css from './Catalog.module.css';
import CatalogItem from '../../components/CatalogItem/CatalogItem';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Sidebar from 'components/Sidebar/Sidebar';
import Loader from '../../components/Loader/Loader'; // Імпортуйте компонент Loader

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [visibleAdverts, setVisibleAdverts] = useState(8);
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Додайте стан для відстеження завантаження

  useEffect(() => {
    const apiUrl = 'https://6506dab33a38daf4803ec7a8.mockapi.io/api/cars';

    axios
      .get(apiUrl)
      .then(response => {
        setAdverts(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleAdverts(prevCount => prevCount + 8);
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavoriteAdverts(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavoriteHandler = advert => {
    const updatedFavorites = [...favoriteAdverts];

    const index = updatedFavorites.findIndex(fav => fav.id === advert.id);

    if (index !== -1) {
      updatedFavorites.splice(index, 1);
    } else {
      updatedFavorites.push(advert);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    setFavoriteAdverts(updatedFavorites);
  };

  const removeFromFavorites = advertToRemove => {
    const updatedFavorites = favoriteAdverts.filter(
      favorite => favorite.id !== advertToRemove.id
    );
    setFavoriteAdverts(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Sidebar />
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={css.cardsContainer}>
            {adverts.slice(0, visibleAdverts).map((advert, index) => (
              <CatalogItem
                key={`${advert.make}-${advert.model}-${advert.year}`}
                advert={advert}
                toggleFavoriteHandler={toggleFavoriteHandler}
                isFavorite={favoriteAdverts.some(fav => fav.id === advert.id)}
                removeFromFavorites={removeFromFavorites}
                isCatalog={true}
              ></CatalogItem>
            ))}
          </ul>
        )}

        {visibleAdverts < adverts.length && <LoadMoreBtn onClick={loadMore} />}
      </>
    </>
  );
};

export default Catalog;
