import React from 'react';
import './App.css';
import carImage from './car.png';
function Homepage() {
  return (
    <div className="app">
      {}
      <header className="header">
        <div className="logo">Urban Rentals</div>
        <nav>
          <ul className="nav-links">
            <li className="active">Home</li>
            <li>Vehicles</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      {}
      <section className="hero">
        <div className="hero-text">
          <h1>Cruise Lagos in style</h1>
          <p>Rent premium cars easily. Reliable, affordable and always ready.</p>
          <button className="explore-btn">Explore Our Fleet</button>
        </div>

        <div className="hero-image">
          <img src={carImage} alt="Car" />
        </div>

        {}
        <div className="booking-form">
          <h3>Book your car</h3>
          <select>
            <option>Car type</option>
          </select>
          <select>
            <option>Pick-up location</option>
          </select>
          <select>
            <option>Drop-off location</option>
          </select>
          <input type="date" />
          <input type="date" />
          <button className="book-now-btn">Book now</button>
        </div>
      </section>

      {}
      <section className="features">
        <div className="feature">
          <span className="icon">📍</span>
          <h4>Availability</h4>
          <p>Our cars are always available for you.</p>
        </div>
        <div className="feature">
          <span className="icon">🚗</span>
          <h4>Comfort</h4>
          <p>Ride with comfort and security.</p>
        </div>
        <div className="feature">
          <span className="icon">💳</span>
          <h4>Savings</h4>
          <p>No hidden charges. Transparent pricing.</p>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
