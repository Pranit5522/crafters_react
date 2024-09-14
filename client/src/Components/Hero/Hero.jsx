import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'

function Hero(){
    const banner = './Assets/banner.png'
    return(
        <div className="hero-element">
            <img className="banner-image" src={banner} alt="banner image" />
            <div className="banner-items">
                <h1>Transform Your Space with Timeless Furniture....</h1>
                <Link to='/categories'><button> Shop Now</button></Link>
            </div>
        </div>
    )
}

export default Hero;