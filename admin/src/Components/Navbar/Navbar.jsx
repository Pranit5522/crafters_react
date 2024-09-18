import React from "react";
import "./Navbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <img src="/Assets/logo.png" alt="brand logo" className="brand-logo" />
            <div className="navbar-text">
                <p className="brand-name">Crafters</p>
                <p className="admin-panel">Admin Panel</p>
            </div>
        </div>
    );
}

export default Navbar;