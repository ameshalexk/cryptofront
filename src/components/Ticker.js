import React, { useState, useEffect } from "react";

const Ticker = () => {
    const coinAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ceos%2Cripple%2Clitecoin&vs_currencies=usd&include_24hr_change=true";
    const [coinData, setCoinData] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(coinAPI);
                const data = await response.json();
                setCoinData({ ...data });
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <div className="ticker_wrap">
            {Object.keys(coinData).length > 0 ? (
                <ul className="ticker_list">
                    {Object.entries(coinData).map((coin, i) => {
                        return (
                            <li className="ticker_item" key={i}>
                                <img
                                    src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                                    alt="coin-logo"
                                />
                                <p>
                                    <strong>{coin[0]}</strong>
                                </p>
                                <p>${coin[1].usd}</p>
                                <p className="ticker_item_change">
                                    ▲ {coin[1].usd_24h_change.toFixed(2)}%
                                </p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>No coin data available</p>
            )}
        </div>
    );
};

export default Ticker;
