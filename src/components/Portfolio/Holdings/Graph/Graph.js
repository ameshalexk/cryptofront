import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Legend from "../Legend/Legend";
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
        fontSize: "5px",
        fill: "#fff",
    };

    return (
        <>
            {Object.keys(coinTotals).length > 0 && (
                <div className="graph_wrap">
                    <PieChart
                        center={[50, 50]}
                        label={({ dataEntry }) =>
                            `${Math.round(dataEntry.percentage)} %`
                        }
                        labelStyle={labelStyle}
                        data={[
                            {
                                title: "BTC",
                                value: coinTotals.bitcoin,
                                color: "#03295c",
                            },
                            {
                                title: "EOS",
                                value: coinTotals.eos,
                                color: "#bc5090",
                            },
                            {
                                title: "ETH",
                                value: coinTotals.ethereum,
                                color: "#8c3379",
                            },
                            {
                                title: "XRP",
                                value: coinTotals.ripple,
                                color: "#eb4e5a",
                            },
                            {
                                title: "LTC",
                                value: coinTotals.litecoin,
                                color: "#ffa600",
                            },
                        ]}
                    />
                    <Legend />
                </div>
            )}
        </>
    );
};

export default Graph;
