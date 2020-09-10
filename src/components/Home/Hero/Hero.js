import React from "react";
import "./Hero.css";

// import logo from './components/Home/Hero/logo.jpg';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1 className="hero-name">Join CoinStance</h1>
                <h1 className="hero-h1">
                    Manage Your Cryptocurrency Portfolio
                </h1>
                <h1 className="hero-h2">
                    CoinStance is a simple way to monitor market activity, make
                    purchases, and review your profits and losses. Login or
                    create account
                </h1>
            </div>

            <div className="image-container">
                <img
                    className="hero-image"
                    src="https://www.brandbucket.com/sites/default/files/logo_uploads/181964/large_coinstance.png"
                    alt="new"
                />
            </div>
        </div>
    );
};

export default Hero;
