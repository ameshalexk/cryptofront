import React, { useEffect, useState } from "react";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";
import PurchaseForm from "./PurchaseForm/PurchaseForm";
import Holdings from "./Holdings/Holdings";
import axios from "axios";
import "./portfolio.css";

const Portfolio = (props) => {
    const coinAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ceos%2Cripple%2Clitecoin&vs_currencies=usd&include_24hr_change=true";
    const [coinData, setCoinData] = useState({});
    const [purchases, setPurchases] = useState([]);

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

    // populate purchase data
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/api/purchases"
                );
                const data = await response.data;
                setPurchases(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <>
            <PurchaseForm />
            <div className="purchasecontainer">
                <PurchaseHistory />
            </div>
            {Object.keys(coinData).length > 0 && (
                <Holdings coinData={coinData} investment={purchases} />
            )}
        </>
    );
};

export default Portfolio;
