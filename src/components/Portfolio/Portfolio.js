import React from "react";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";
import PurchaseForm from "./PurchaseForm/PurchaseForm";
import Holdings from "./Holdings/Holdings";

const Portfolio = () => {
    return (
        <>
            <PurchaseForm />
            <PurchaseHistory />
            <Holdings />
        </>
    );
};

export default Portfolio;
