import React, { useEffect, useState } from "react";
import Graph from "./Graph/Graph";
import Stats from "./Stats/Stats";
import "./Holdings.css";

const Holdings = () => {
    const coinAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ceos%2Cripple%2Clitecoin&vs_currencies=usd&include_24hr_change=true";
    const [investment, setInvestment] = useState([]);
    const [coinData, setCoinData] = useState([]);
    const [netWorth, setNetWorth] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/purchases"
                );
                const data = await response.json();
                setInvestment(data);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(coinAPI);
                const data = await response.json();
                setCoinData(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const summedTotals = {};
                investment.forEach((item) => {
                    if (summedTotals.hasOwnProperty(item.coin)) {
                        summedTotals[item.coin] +=
                            item.shares * coinData[item.coin].usd;
                    } else {
                        summedTotals[item.coin] =
                            item.shares * coinData[item.coin].usd;
                    }
                });
                setNetWorth(summedTotals);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [coinData, investment]);

    return (
        <section className="holdings_wrap">
            {/* <h2>Holdings</h2> */}
            <div className="holdings_totals">
                {investment.length > 0 ? (
                    <Stats investment={investment} netWorth={netWorth} />
                ) : (
                    <p>Loading holdings...</p>
                )}
            </div>
            <Graph investment={investment} />
        </section>
    );
};

export default Holdings;
