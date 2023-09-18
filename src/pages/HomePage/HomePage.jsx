import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Company</h1>
      <p>
        CarRent car rental operates for you every day, including weekends. We
        rent out only reliable and well-maintained vehicles that undergo regular
        technical inspections.
      </p>

      <div>
        <h2>Car Rental: Company's Vehicles</h2>
        <p>
          Our car rental catalog is quite diverse. You can choose a vehicle
          based on its class category, transmission type, and the type of fuel
          it uses. In the CarRent fleet, you will find cars from well-known car
          brands familiar to all drivers:
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

      <div className="about-us">
        <h2>About Us</h2>
        <p>Our company is a leader in its field with years of experience.</p>
      </div>
    </div>
  );
};

export default HomePage;
