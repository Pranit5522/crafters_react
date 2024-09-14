import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <img className="newsletter-image" src="./Assets/newsletter.png" alt="newsletter" />
      <div className="newsletter-content">
        <h1>EXCLUSIVE NEWS & CONTENT</h1>
        <p>Subscribe to our newsletter to keep up to date with all the events of the service</p>
        <div className="newsletter-signup">
          <input type="email" placeholder="Email address" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

