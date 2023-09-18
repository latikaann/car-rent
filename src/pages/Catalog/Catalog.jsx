import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "./Catalog.module.css";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import shortid from "shortid";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [visibleAdverts, setVisibleAdverts] = useState(8);

  useEffect(() => {
    const apiUrl = "https://6506dab33a38daf4803ec7a8.mockapi.io/api/cars";

    axios
      .get(apiUrl)
      .then((response) => {
        setAdverts(response.data);
      })
      .catch((error) => {
        console.error("Помилка при отриманні даних:", error);
      });
  }, []);

  console.log("adverts", adverts);

  const loadMore = () => {
    setVisibleAdverts((prevCount) => prevCount + 8);
  };

  return (
    <>
      <ul className={css.cardsContainer}>
        {adverts.slice(0, visibleAdverts).map((advert, index) => (
          <CatalogItem key={shortid.generate()} advert={advert} />
        ))}
      </ul>

      {visibleAdverts < adverts.length && (
        <button type="button" className={css.loadMoreBtn} onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
