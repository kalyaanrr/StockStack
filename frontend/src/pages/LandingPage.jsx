import React from 'react';
import 'frontend/src/styles/landingstyle.css'; // Import the CSS file
import landani from "frontend/src/components/Landingani.gif";
import logo from "frontend/src/components/logo.gif";
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
function LandingPage() {
  return (
    <div className="Landing">
      <header className="header">
        <div className="logo-container">
          
        <img id="logoimg" src={logo}alt='Hello'/>
        <span className="logo-text">StockStack</span>
        </div>
        {/* Get Started Button at the Top Right */}
        <div className="get-started-button-container">
          <Link to="/home" className="get-started-button">Get Started</Link>
        </div>
      </header>

      <div className="container">
        {/* Left Center Section for Description */}
        <div className="description-container">
          <h1 className="app-description">
            Welcome to Our Dynamic Application
          </h1>
          <p className="app-details">
            This application offers seamless features to manage your products, inventory, and more. Explore the intuitive interface designed for ease and efficiency.
          </p>
        </div>
        {/* Right Section for Large Image */}
        <div className="image-container">
        <img className="app-image"src={landani}alt='Hello'/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;