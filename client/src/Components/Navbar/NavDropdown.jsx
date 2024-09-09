import React from "react";
import { Link } from "react-router-dom";

function NavDropdown(props){
    return(
        <div className="nav-dropdown">
            <Link to="/" className="brand-name-link" > <li className="nav-link">Home</li> </Link>
            <hr />
            <Link to="/categories" className="brand-name-link" > <li className="nav-link" >Collection</li> </Link>
            <hr />
            <a href={location.pathname !== "/" ? "/" : "#about"} className="brand-name-link"> <li className="nav-link">About </li></a>
            <hr />
            <a href={location.pathname !== "/" ? "/" : "#faq"} className="brand-name-link"><li className="nav-link">FAQs </li></a>
        </div>
    );
}

export default NavDropdown;