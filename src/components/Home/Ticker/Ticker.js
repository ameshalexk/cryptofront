import React from "react";
import icons from "./icons/icons";
import "./Ticker.css";

const Ticker = (props) => {
    return (
        <section className="ticker_wrap">
            {Object.keys(props.coinData).length > 0 ? (
                <ul className="ticker_list">
                    {Object.entries(props.coinData)
                        .sort((a, b) => (a[0] > b[0] ? 1 : -1))
                        .map((coin, i) => {
                            return (
                                <li className="ticker_item" key={i}>
                                    <img src={icons[coin[0]]} alt="coin-logo" />
                                    <p className="ticker_item_name">
                                        <strong>{coin[0]}</strong>
                                    </p>
                                    <p className="ticker_item_price">
                                        ${coin[1].usd}
                                    </p>
                                    <p className="ticker_item_change">
                                        {coin[1].usd_24h_change.toFixed(2) >
                                        0 ? (
                                            <span className="text_green">
                                                ▲{" "}
                                                {coin[1].usd_24h_change.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                        ) : (
                                            <span className="text_red">
                                                ▼{" "}
                                                {coin[1].usd_24h_change.toFixed(
                                                    2
                                                )}
                                                %
                                            </span>
                                        )}
                                    </p>
                                </li>
                            );
                        })}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default Ticker;
