import React from "react";
import "./Hero.css";

// import logo from './components/Home/Hero/logo.jpg';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1 className="hero-name">CoinBox</h1>
                <h1 className="hero-h1">
                    Manage Your Cryptocurrency Portfolio
                </h1>
                <h1 className="hero-h2">
                    CoinBox is a simple way to monitor market activity, make
                    purchases, and review your profits and losses. Login or
                    create account
                </h1>
            </div>

            <div image-container>
                <img
                    className="hero-image"
                    src="https://i.ibb.co/2MwbH9d/Bitcoins-hepa-Golden-virtual-currency-coins-background-3-D-Illustration.jpg"
                    alt="new"
                />
            </div>
        </div>
    );
};

export default Hero;
