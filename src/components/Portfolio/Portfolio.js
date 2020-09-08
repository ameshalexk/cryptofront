import React from "react";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";
import PurchaseForm from "./PurchaseForm/PurchaseForm";
import Holdings from "./Holdings/Holdings";
import "./portfolio.css"

const Portfolio = () => {
    return (
        <>
            <PurchaseForm />
            <div className="purchasecontainer">
            <PurchaseHistory/>

            </div>
            <Holdings />
        </>
    );
};

export default Portfolio;
