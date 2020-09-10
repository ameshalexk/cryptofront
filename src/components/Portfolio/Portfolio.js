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
    const [newPurchase, updateNewPurchase] = useState({
        coin: "",
        price: "",
        shares: "",
    });
    const handleChange = (event) => {
        updateNewPurchase({
            ...newPurchase,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3001/api/purchases",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newPurchase),
                }
            );
            const data = await response.json();
            setPurchases([...purchases, data]);
            updateNewPurchase({
                coin: "",
                price: "",
                shares: "",
            });
        } catch (e) {
            console.error(e);
        }
    };

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
        <div className="portfoliocontainer">
            <div className="portfoliocontainerchild1"> 
            {Object.keys(coinData).length > 0 && (
                <Holdings  coinData={coinData} investment={purchases} />
            )}
            <PurchaseForm  
                newPurchase={newPurchase}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            </div>
            <div className="portfoliocontainerchild2">
            
                <PurchaseHistory  coinData={coinData} investment={purchases}/>

                
            </div>
        </div>
    );
};

export default Portfolio;
