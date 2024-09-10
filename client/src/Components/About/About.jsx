import React from "react";
import "./About.css"
import image from "../Assets/about.jpg"
import best from "../Assets/best-seller.png"
import hand from "../Assets/handcraft.png"
import deli from "../Assets/delivery.png"

function About(){
    return(
        <div>
            <div className="flex-container">
                <img className = "about-image" src={image} alt="about section image" />
                <div className="about-section">
                    <div>
                        <h2 id="about">ABOUT US</h2>
                        <p>Welcome to Crafters, your premier destination for luxurious and high-quality furniture. Our mission is to provide you with an exquisite selection of pieces that blend elegance, functionality, and superior craftsmanship. At Crafters, we carefully curate our collection to ensure that every item meets our exacting standards of excellence. Whether you’re looking to elevate your home with stylish new additions or seeking timeless classics, our curated range of premium furniture is designed to transform your living spaces into a haven of comfort and sophistication. Thank you for choosing Crafters to enhance your home with our exceptional furniture offerings. We are committed to delivering unparalleled quality and exceptional service to make your shopping experience truly remarkable.</p>
                    </div>
                    <a href="/categories">SHOP NOW</a>
                </div>
            </div>
            <div className="prop-container">
                <div className="prop">
                    <img src={best} alt="" className="feature-img" />
                    <h2>EXCLUSIVE DESIGN</h2>
                    <p>Our furniture pieces are more than just functional; they are designed to be exceptional. Each item in our collection reflects a unique blend of artistry and innovation, crafted to stand out and complement your space. We prioritize exclusive designs that embody both timeless elegance and modern sophistication, ensuring that your furniture not only enhances your home but also serves as a statement of style.</p>
                </div>
                <div className="prop">
                    <img src={hand} alt="" className="feature-img" />
                    <h2>HANDMADE WORK</h2>
                    <p>Quality craftsmanship is at the heart of everything we do. Our furniture is meticulously handmade by skilled artisans who bring passion and expertise to every piece. We believe in preserving traditional techniques while incorporating contemporary design elements to create furniture that is not only beautiful but also durable and enduring. Each item is a testament to the dedication and skill of our craftsmen.</p>
                </div>
                <div className="prop">
                    <img src={deli} alt="" className="feature-img" />
                    <h2>CAREFUL DELIVERY</h2>
                    <p>We understand that the delivery of your new furniture is just as important as its design and craftsmanship. At Crafters, we ensure that each piece arrives in pristine condition through our careful delivery process. Our team handles every step with the utmost care, from packing to transport, to guarantee that your furniture reaches you safely and promptly. Your satisfaction is our priority, and we strive to make your experience seamless from start to finish.</p>
                </div>
            </div>
        </div>
    );
}

export default About;