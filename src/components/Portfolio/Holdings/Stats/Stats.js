import React, { useState, useEffect } from "react";
import icons from "../../../Home/Ticker/icons/icons";

const Stats = (props) => {
    const [investmentTotal, setInvestmentTotal] = useState(0);
    const [netWorth, setNetWorth] = useState(0);

    useEffect(() => {
        const total = props.investment
            .map((item) => item.price * item.shares)
            .reduce((a, b) => a + b);
        setInvestmentTotal(total);
    }, [props.investment]);

    useEffect(() => {
        const worth =
            Object.keys(props.netWorth).length > 0 &&
            Object.values(props.netWorth).reduce((a, b) => a + b);
        setNetWorth(worth);
    }, [props.netWorth]);

    return (
        <>
            {netWorth > 0 && (
                <div className="stats_wrap">
                    <p className="net_label">Net Worth:</p>
                    <p className="net_total">${netWorth.toFixed(2)}</p>
                    <p>Investment: ${investmentTotal.toFixed(2)}</p>
                    <p>
                        {investmentTotal > netWorth ? (
                            <span className="text_red">
                                ▾ ${(investmentTotal - netWorth).toFixed(2)}
                            </span>
                        ) : (
                            <span className="text_green">
                                ▲ $
                                {Math.abs(investmentTotal - netWorth).toFixed(
                                    2
                                )}
                            </span>
                        )}
                    </p>
                    <ul className="stats_coins">
                        {Object.entries(props.netWorth)
                            .sort((a, b) => (a[1] > b[1] ? -1 : 1))
                            .map((item, i) => {
                                return (
                                    <li key={i}>
                                        <img
                                            src={icons[item[0]]}
                                            alt={icons[item[0]]}
                                        />
                                        {item[1].toFixed(2)}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Stats;
