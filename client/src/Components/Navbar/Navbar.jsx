import React from "react";
import './Navbar.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Navbar(){
    return (
        <nav className="navbar">
          <div className="navbar-left">
            <li className="nav-link">Collection</li>
            <li className="nav-link">FAQs</li>
            <li className="nav-link">About</li>
          </div>
          
          <div className="navbar-center">
            <span className="brand-name">Crafters</span>
          </div>
          
          <div className="navbar-right">
            <li className="nav-link">Login</li>
            <span>
              <ShoppingBagIcon fontSize="large" />
            </span>
          </div>
          <div className="cart-counter">0</div>
        </nav>
      );
}

export default Navbar