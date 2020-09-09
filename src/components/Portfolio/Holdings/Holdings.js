import React, { useEffect, useState } from "react";
import Graph from "./Graph/Graph";
import Stats from "./Stats/Stats";
import "./Holdings.css";

const Holdings = (props) => {
    const [netWorth, setNetWorth] = useState(0);

    useEffect(() => {
        const summedTotals = {};
        props.investment.forEach((item) => {
            if (summedTotals.hasOwnProperty(item.coin)) {
                summedTotals[item.coin] +=
                    item.shares * props.coinData[item.coin].usd;
            } else {
                summedTotals[item.coin] =
                    item.shares * props.coinData[item.coin].usd;
            }
        });
        setNetWorth(summedTotals);
    }, [props.coinData, props.investment]);

    return (
        <section className="holdings_wrap">
            {/* <h2>Holdings</h2> */}
            <div className="holdings_totals">
                {props.investment.length > 0 ? (
                    <Stats investment={props.investment} netWorth={netWorth} />
                ) : (
                    <p>Loading holdings...</p>
                )}
            </div>
            <Graph investment={props.investment} />
        </section>
    );
};

export default Holdings;
