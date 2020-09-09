import React from "react";
import "./Legend.css";

const Legend = () => {
    return (
        <ul className="legend">
            <li id="legend_bitcoin">
                <span className="legend_circle"></span>
                <p>BTC</p>
            </li>
            <li id="legend_eos">
                <span className="legend_circle"></span>
                <p>EOS</p>
            </li>
            <li id="legend_ethereum">
                <span className="legend_circle"></span>
                <p>ETH</p>
            </li>
            <li id="legend_ripple">
                <span className="legend_circle"></span>
                <p>XRP</p>
            </li>
            <li id="legend_litecoin">
                <span className="legend_circle"></span>
                <p>LTC</p>
            </li>
        </ul>
    );
};

export default Legend;
