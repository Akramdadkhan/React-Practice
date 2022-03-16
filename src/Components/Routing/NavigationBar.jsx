import React from "react";
import { Link } from "react-router-dom";
 

const NavigationBar = () => {
  return (
    <div>
      <h1>This is Navigation Components</h1>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="product">Products</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="contactus">Contact-Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
