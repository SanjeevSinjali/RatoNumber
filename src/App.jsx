import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    carType: '',
    pickUpLocation: '',
    dropOffLocation: '',
    rentalDate: '',
    returnDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Vehicles</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>"Your dream car, deliverd in demand"</h1>
          <p>Rent premium cars with ease—reliable, affordable and ready when you are.</p>
          <button className="cta-button">Explore</button>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-form">
        <div className="container">
          <h2>Book your car</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="carType">Car type</label>
              <select 
                id="carType" 
                name="carType" 
                value={formData.carType}
                onChange={handleChange}
                required
              >
                <option value="">Select car type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pickUpLocation">Pick-up location</label>
              <input 
                type="text" 
                id="pickUpLocation" 
                name="pickUpLocation" 
                value={formData.pickUpLocation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dropOffLocation">Drop-off location</label>
              <input 
                type="text" 
                id="dropOffLocation" 
                name="dropOffLocation" 
                value={formData.dropOffLocation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rentalDate">Rental date</label>
              <input 
                type="date" 
                id="rentalDate" 
                name="rentalDate" 
                value={formData.rentalDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="returnDate">Return date</label>
              <input 
                type="date" 
                id="returnDate" 
                name="returnDate" 
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">Book now</button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="feature">
            <h3>Availability</h3>
            <p>Our cars are available whenever you need them.</p>
          </div>
          <div className="feature">
            <h3>Comfort</h3>
            <p>Our rentals come with professional drivers and security detail upon request.</p>
          </div>
          <div className="feature">
            <h3>Savings</h3>
            <p>Enjoy transparent pricing with no hidden charges.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;