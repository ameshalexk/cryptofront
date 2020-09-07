import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Graph.css";

const Graph = (props) => {
    const [coinTotals, updateCoinTotals] = useState({});

    useEffect(() => {
        const summedTotals = {};
        props.investment.forEach((item) => {
            if (summedTotals.hasOwnProperty(item.coin)) {
                summedTotals[item.coin] += item.price * item.shares;
            } else {
                summedTotals[item.coin] = item.price * item.shares;
            }
        });
        updateCoinTotals({ ...summedTotals });
    }, [props.investment]);

    const labelStyle = {
        fontSize: "6px",
        fill: "#fff",
    };

    return (
        <>
            {Object.keys(coinTotals).length > 0 && (
                <div className="graph_wrap">
                    <PieChart
                        animation
                        animationDuration={500}
                        animationEasing="ease-out"
                        center={[50, 50]}
                        label={({ dataEntry }) =>
                            `${Math.round(dataEntry.percentage)} %`
                        }
                        labelStyle={labelStyle}
                        data={[
                            {
                                title: "BTC",
                                value: coinTotals.Bitcoin,
                                color: "#03295c",
                            },
                            {
                                title: "ETH",
                                value: coinTotals.Etherium,
                                color: "#8c3379",
                            },
                            {
                                title: "XRP",
                                value: coinTotals.Ripple,
                                color: "#eb4e5a",
                            },
                            {
                                title: "LTC",
                                value: coinTotals.Litecoin,
                                color: "#ffa600",
                            },
                        ]}
                    />
                </div>
            )}
        </>
    );
};

export default Graph;
