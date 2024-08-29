import React from "react";
import './Hero.css'
import banner from "../Assets/banner.png"
function Hero(){
    return(
        <div className="hero-element">
            <img className="banner-image" src={banner} alt="banner image" />
            <div className="banner-items">
                <h1>Transform Your Space with Timeless Furniture....</h1>
                <button> Shop Now</button>
            </div>
        </div>
    )
}

export default Hero;