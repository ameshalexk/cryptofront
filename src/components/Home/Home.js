import React from "react";
import Ticker from "./Ticker/Ticker";
import Hero from "./Hero/Hero";

const Home = (props) => {
    return (
        <>
            <Hero />
            <Ticker coinData={props.coinData} />
        </>
    );
};

export default Home;
