import React from "react";

function Signup_Login(){
    return(
        <div className="sidespace sign">
            <div className="signup_page">
                <h2>Sign up</h2>
                <input type="text" className="input" placeholder="Your name"/>
                <input type="text" className="input" placeholder="Email Address"/>
                <input type="text" className="input" placeholder="Password"/>
                <button className="button">Continue</button>
                <div className="login">
                    <p> Already have an account?</p>
                    <p className="login-link">Login here</p>
                </div>
                <div className="login">
                    <input type="checkbox" name="" id="check" />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Signup_Login;