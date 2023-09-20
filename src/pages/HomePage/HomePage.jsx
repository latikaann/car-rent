import React from 'react';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

const imageUrl =
  'https://cdn.riastatic.com/photosnewr/ria/news_common/avto-iz-ssha-za-i-protiv-stoit-li-pokupat-i-kak-zakazat__237386-620x0.jpg';

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <div>
        <h1 className={css.title}>Welcome to Our Company</h1>
        <p>
          CarRent car rental operates for you every day, including weekends. We
          rent out only reliable and well-maintained vehicles that undergo
          regular technical inspections.
        </p>
      </div>

      <div className={css.secondContainer}>
        <div className={css.textContainer}>
          <h2>Car Rental: Company's Vehicles</h2>
          <p>
            Our car rental catalog is quite diverse. You can choose a vehicle
            based on its class category, transmission type, and the type of fuel
            it uses. In the CarRent fleet, you will find cars from well-known
            car brands familiar to all drivers:
          </p>
          <ul>
            <li>KIA Rio, Ford Fiesta, Suzuki SX4 (economy class);</li>
            <li>
              Mitsubishi Lancer X 4WD, Hyundai Elantra, Mazda 3, Nissan Sentra,
              Mazda 6, Toyota Corolla, Volkswagen Jetta, Toyota Prius Hybrid
              (midsize class);
            </li>
            <li>Volkswagen Passat B8 R-Line, Honda Accord (business class);</li>
            <li>
              Chevrolet Tracker, Mitsubishi ASX, Mazda CX-5, Honda Pilot
              (crossovers).
            </li>
          </ul>
        </div>
        <div className={css.cardWrap}>
          <img src={imageUrl} alt="" className={css.itemCard} />
        </div>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>Our company is a leader in its field with years of experience.</p>
      </div>

      <div className="about-us">
        <Link className={css.link} to="/catalog">
          Choose your car
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
