import { useState } from 'react';
import './App.css';

function App() {
  // State for which form to show (login, register, or booking)
  const [showForm, setShowForm] = useState('booking'); // 'login', 'register', or 'booking'
  
  // State for login form
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  // State for registration form
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // State for booking form (your existing form)
  const [bookingData, setBookingData] = useState({
    carType: '',
    pickUpLocation: '',
    dropOffLocation: '',
    rentalDate: '',
    returnDate: ''
  });

  // Handle login form changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  // Handle registration form changes
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  // Handle booking form changes (your existing function)
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value
    });
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // After login, show the booking form
    setShowForm('booking');
  };

  // Handle registration form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", registerData);
    // After registration, show the booking form
    setShowForm('booking');
  };

  // Handle booking form submission (your existing function)
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", bookingData);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
            <li><a href="#" onClick={() => setShowForm('booking')}>Home</a></li>
            <li><a href="#">Vehicles</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>
              {showForm === 'booking' ? (
                <>
                  <a href="#" onClick={() => setShowForm('login')}>Login</a> | 
                  <a href="#" onClick={() => setShowForm('register')}> Register</a>
                </>
              ) : null}
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>"Your dream car, delivered in demand"</h1>
          <p>Rent premium cars with ease—reliable, affordable and ready when you are.</p>
          <button className="cta-button">Explore</button>
        </div>
      </section>

      {/* Show different forms based on state */}
      {showForm === 'login' && (
        <section className="auth-form">
          <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input 
                  type="email" 
                  id="login-email" 
                  name="email" 
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input 
                  type="password" 
                  id="login-password" 
                  name="password" 
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              
              <button type="submit" className="submit-button">Login</button>
              
              <p className="auth-switch">
                Don't have an account? 
                <a href="#" onClick={() => setShowForm('register')}> Register here</a>
              </p>
            </form>
          </div>
        </section>
      )}

      {showForm === 'register' && (
        <section className="auth-form">
          <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="register-name">Full Name</label>
                <input 
                  type="text" 
                  id="register-name" 
                  name="name" 
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input 
                  type="email" 
                  id="register-email" 
                  name="email" 
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input 
                  type="password" 
                  id="register-password" 
                  name="password" 
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="register-confirm-password">Confirm Password</label>
                <input 
                  type="password" 
                  id="register-confirm-password" 
                  name="confirmPassword" 
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              
              <button type="submit" className="submit-button">Register</button>
              
              <p className="auth-switch">
                Already have an account? 
                <a href="#" onClick={() => setShowForm('login')}> Login here</a>
              </p>
            </form>
          </div>
        </section>
      )}

      {showForm === 'booking' && (
        <section className="booking-form">
          <div className="container">
            <h2>Book your car</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label htmlFor="carType">Car type</label>
                <select 
                  id="carType" 
                  name="carType" 
                  value={bookingData.carType}
                  onChange={handleBookingChange}
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
                  value={bookingData.pickUpLocation}
                  onChange={handleBookingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dropOffLocation">Drop-off location</label>
                <input 
                  type="text" 
                  id="dropOffLocation" 
                  name="dropOffLocation" 
                  value={bookingData.dropOffLocation}
                  onChange={handleBookingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="rentalDate">Rental date</label>
                <input 
                  type="date" 
                  id="rentalDate" 
                  name="rentalDate" 
                  value={bookingData.rentalDate}
                  onChange={handleBookingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="returnDate">Return date</label>
                <input 
                  type="date" 
                  id="returnDate" 
                  name="returnDate" 
                  value={bookingData.returnDate}
                  onChange={handleBookingChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">Book now</button>
            </form>
          </div>
        </section>
      )}

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