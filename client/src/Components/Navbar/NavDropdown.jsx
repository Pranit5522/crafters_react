import React from "react";
import { Link } from "react-router-dom";

function NavDropdown(){
    return(
    <div className="nav-dropdown">
        <Link to="/" className="brand-name-link"> <li className="nav-link">Home</li> </Link>
        <hr />
        <Link to="/categories" className="brand-name-link" > <li className="nav-link">Collection</li> </Link>
        <hr />
        <li className="nav-link">About</li>
        <hr />
        <li className="nav-link">FAQ</li>
    </div>
    );
}

export default NavDropdown;