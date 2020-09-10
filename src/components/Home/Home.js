import React, { useEffect, useState } from "react";
import Ticker from "./Ticker/Ticker";
import Hero from "./Hero/Hero";
import axios from "axios";

const Home = (props) => {
    const coinAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ceos%2Cripple%2Clitecoin&vs_currencies=usd&include_24hr_change=true";
    const [coinData, setCoinData] = useState({});

    // populate coinData state
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(coinAPI);
                const data = await response.data;
                setCoinData({ ...data });
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    // re-fetch coin api data every minute
    useEffect(() => {
        setInterval(() => {
            (async () => {
                try {
                    const response = await axios.get(coinAPI);
                    const data = await response.data;
                    setCoinData({ ...data });
                } catch (e) {
                    console.error(e);
                }
            })();
        }, 60000);
    }, []);

    return (
        <div className="home">
            <Hero />
            <Ticker coinData={coinData} />
        </div>
    );
};

export default Home;
