import React, { useEffect, useState } from "react";
import Graph from "./Graph/Graph";
import Legend from "./Legend/Legend";
import "./Holdings.css";

const Holdings = () => {
    const [investment, setInvestment] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/purchases"
                );
                const data = await response.json();
                setInvestment(data);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <section className="holdings_wrap">
            <h2>Holdings</h2>
            {investment.length > 0 && (
                <p>
                    Total Investment: $
                    {investment
                        .map((item) => item.price * item.shares)
                        .reduce((a, b) => a + b)}
                </p>
            )}

            <Graph investment={investment} />
            <Legend />
        </section>
    );
};

export default Holdings;
