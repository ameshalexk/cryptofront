import React from "react";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";
import PurchaseForm from "./PurchaseForm/PurchaseForm";
import Holdings from "./Holdings/Holdings";
import "./portfolio.css";

const Portfolio = (props) => {
    return (
        <>
            <PurchaseForm />
            <div className="purchasecontainer">
                <PurchaseHistory />
            </div>
            {Object.keys(props.coinData).length > 0 && (
                <Holdings
                    coinData={props.coinData}
                    investment={props.purchases}
                />
            )}
        </>
    );
};

export default Portfolio;
