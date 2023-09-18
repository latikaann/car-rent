import React, { useEffect, useCallback } from "react";
import css from "./Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ isOpen, onClose, advert }) => {
  const {
    make,
    model,
    img,
    year,
    rentalPrice,
    address,
    rentalConditions,
    functionalities,
    accessories,
    type,
    id,
    engineSize,
    fuelConsumption,
    description,
    mileage,
  } = advert;

  const close = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, [close]);

  if (!isOpen) {
    return null;
  }

  const parts = address.split(",");
  const city = parts[1].trim();
  const country = parts[2].trim();
  const conditionsArray = rentalConditions.split("\n");

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const formattedMileage = formatNumberWithCommas(mileage);

  return createPortal(
    <div className={css.modalOverlay} onClick={close}>
      <div className={css.modalContainer}>
        <button className={css.closeBtn} onClick={onClose}>
          <CloseIcon />
        </button>
        <div className={css.imageWrapper}>
          <img src={img} className={css.image} alt="Car" />
        </div>
        <div>
          <div className={css.firstTextBlock}>
            <h2 className={css.modalTitle}>
              {make} <span className={css.titleBlue}>{model}</span>, {year}
            </h2>
            <ul className={css.greyList}>
              <li className={css.greyItems}>
                <p>{city}</p>
                <p>{country}</p>
                <p>Id: {id}</p>
                <p>Year: {year}</p>
                <p>Type: {type}</p>
              </li>
              <li className={css.greyItems}>
                <p>Fuel Consumption: {fuelConsumption}</p>
                <p>Engine Size: {engineSize}</p>
              </li>
            </ul>
            <p className={css.firstSubtitle}>{description}</p>
          </div>
          <div className={css.secondTextBlock}>
            <h3 className={css.subtitle}>Accessories and functionalities:</h3>
            <ul className={css.greyList}>
              <li className={css.greyItems}>
                {accessories.map((accessory) => (
                  <p key={accessory}>{accessory}</p>
                ))}
              </li>
              <li className={css.greyItems}>
                {functionalities.map((functionality) => (
                  <p key={functionality}>{functionality}</p>
                ))}
              </li>
            </ul>
          </div>
          <div className={css.thirdTextBlock}>
            <h3 className={css.subtitle}>Rental Conditions:</h3>
            <ul className={css.thirdBlockList}>
              {conditionsArray.map((condition, index) => (
                <li key={index}>
                  {condition.includes(":") ? (
                    <>
                      {condition.split(":")[0]}:{" "}
                      <span>{condition.split(":")[1]}</span>
                    </>
                  ) : (
                    condition
                  )}
                </li>
              ))}
              <li>
                Mileage: <span>{formattedMileage}</span>
              </li>
              <li>
                Price: <span>{rentalPrice}</span>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" className={css.rentBtn}>
          Rental car
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
