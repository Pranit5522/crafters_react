import React, { useState, useEffect } from "react";
import './Navbar.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NavDropdown from "./NavDropdown";

function Navbar(){
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  function handleClick(){
    setMenuOpen((prevValue)=>{
      return(!prevValue);
    })
  }

  return (
      <div>
        <nav className="navbar">
          {screenWidth<=768 && <div className="navbar-left"> 
            <li className="nav-link" id="menu" onClick={handleClick}>
              {menuOpen ? <MenuOpenIcon fontSize="large"/>:<MenuIcon fontSize="large"/>}
            </li> </div>}
          {screenWidth>768 && <div className="navbar-left">
            <Link to='/categories' className="brand-name-link"><li className="nav-link">Collection</li></Link>
            <li className="nav-link">FAQs</li>
            <li className="nav-link">About</li>
          </div>}
          
          <div className="navbar-center">
            {screenWidth>=1100 && <Link to='/' className="brand-name-link"><span className="brand-name">Crafters</span></Link>}
          </div>
          
          <div className="navbar-right">
          <Link to='/login' className="brand-name-link"> <li className="nav-link">Login</li></Link>
            <span>
              <ShoppingBagIcon fontSize="large" />
            </span>
          </div>
          <div className="cart-counter">0</div>
        </nav>
        {(menuOpen && screenWidth <= 768) && (
          <div className={menuOpen ? "nav-dropdown expanded" : "nav-dropdown"}>
            <NavDropdown />
          </div>
        )}
      </div>
    );
}

export default Navbar