import React from "react";
import './Navbar.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
          <div className="navbar-left">
          <Link to='/categories' className="brand-name-link"><li className="nav-link">Collection</li></Link>
            <li className="nav-link">FAQs</li>
            <li className="nav-link">About</li>
          </div>
          
          <div className="navbar-center">
          <Link to='/' className="brand-name-link"><span className="brand-name">Crafters</span></Link>
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