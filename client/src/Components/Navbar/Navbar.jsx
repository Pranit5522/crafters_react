import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NavDropdown from "./NavDropdown";
import { useLocation } from "react-router-dom";

function Navbar({cartCount}){
  
  const location = useLocation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  
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
              {menuOpen ? <MenuOpenIcon style={screenWidth>560 ? { fontSize: '30px' } : { fontSize: '25px' }} />:<MenuIcon style={screenWidth>560 ? { fontSize: '30px' } : { fontSize: '25px' }} />}
            </li> </div>}
          
          {screenWidth>768 && <div className="navbar-left">
            {(screenWidth<1100 && screenWidth>768) && <Link to='/' className="brand-name-link"><span className="brand-name"><HomeIcon style={{ fontSize: '28px' }}/></span></Link>}
            <Link to='/categories' className="brand-name-link"><li className="nav-link">Collection</li></Link>
            <a href={location.pathname !== "/" ? "/" : "#faq"} className="nav-link">FAQs</a>
            <a href={location.pathname !== "/" ? "/" : "#about"} className="nav-link">About</a>
          </div>}
          
          <div className="navbar-center">
            {screenWidth>=1100 && <Link to='/' className="brand-name-link"><span className="brand-name">Crafters</span></Link>}
          </div>
          
          <div className="navbar-right">
          <Link to='/login' className="brand-name-link"> <li className="nav-link" style={screenWidth>560 ? { fontSize: '30px' } : { fontSize: '25px' }}>Login</li></Link>
          <Link to="/cart">
            <span className="cart-icon">
              <ShoppingBagIcon style={screenWidth>560 ? { fontSize: '30px' } : { fontSize: '25px' }} />
            </span>
          </Link>
          </div>
          <div className="cart-counter">{cartCount}</div>
        </nav>
        {(menuOpen && screenWidth <= 768) && (
          <div ref={dropdownRef} className={menuOpen ? "nav-dropdown expanded" : "nav-dropdown"}>
            <NavDropdown 
              handleClick = {() => setMenuOpen(false)}
            />
          </div>
        )}
      </div>
    );
}

export default Navbar