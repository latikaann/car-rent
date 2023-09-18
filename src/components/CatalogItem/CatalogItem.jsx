import React, { useState } from 'react';
import css from './CatalogItem.module.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Modal from '../Modal/Modal';

const CatalogItem = ({ advert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    make,
    model,
    img,
    year,
    rentalPrice,
    address,
    rentalCompany,
    functionalities,
    type,
    id,
  } = advert;

  const parts = address.split(',');
  const city = parts[1].trim();
  const country = parts[2].trim();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={css.itemContainer}>
        <div>
          <div className={css.imageWrapper}>
            <img src={img} alt="" className={css.itemCard} />
            <button type="button" className={css.favoriteBtn}>
              <FavoriteBorder className={css.favoriteIcon} />
            </button>
          </div>
          <div className={css.itemText}>
            <p className={css.caption}>
              {make} <span>{model}</span>, {year}
            </p>
            <p className={css.caption}>{rentalPrice}</p>
          </div>
          <ul className={css.list}>
            <li>
              <p className={css.aboutText}>{city}</p>
            </li>
            <li>
              <p className={css.aboutText}>{country}</p>
            </li>
            <li>
              <p className={css.aboutText}>{rentalCompany}</p>
            </li>
            <li>
              <p className={css.aboutText}>Premium</p>
            </li>
            <li>
              <p className={css.aboutText}>{type}</p>
            </li>
            <li>
              <p className={css.aboutText}>{model}</p>
            </li>
            <li>
              <p className={css.aboutText}>{id}</p>
            </li>

            <li>
              <p className={css.aboutText}>{functionalities[0]}</p>
            </li>
          </ul>
        </div>
        <button onClick={openModal} type="button" className={css.itemBtn}>
          Learn more
        </button>
      </li>
      <Modal isOpen={isModalOpen} onClose={closeModal} advert={advert} />
    </>
  );
};

export default CatalogItem;
