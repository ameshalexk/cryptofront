import React, { useState, useEffect } from "react";
import axios from "axios";

import PurchaseShow from "../../PurchaseShow/PurchaseShow.js";
import "./purchasehistory.css";
const PurchaseList = (props) => {
    const [purchase, setPurchase] = useState([]);

    // useEffect(() => {
    //     // Need to wrap this in an async function to use await inside:
    //     async function fetchData() {
    //         const response = await axios.get(
    //             "http://localhost:3001/api/purchases"
    //         );
    //         setPurchase(response.data);
    //     }
    //     fetchData();
    // }, []);

    const showPurchases = props.investment.map((purchase, i) => {
        return (
            <div>
                <PurchaseShow coindata={props.coinData} purchase={purchase} />
            </div>
        );
    });

    return (
        <div className="purchasehistorycontainer">
            <div className="tablecontainer">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Shares</th>
                    <th>Total</th>
                    <th>P&L</th>
                    <th>EDIT</th>
                </tr>{" "}
                <br />
            </div>
            {showPurchases}
        </div>
    );
};

export default PurchaseList;
