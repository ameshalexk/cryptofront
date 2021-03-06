import "./edit.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
let endpoint = "/api/purchases";

export default function Show(props) {
    const [purchase, updatePurchase] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `https://coinstance-backend.herokuapp.com/api/purchases/${props.match.params.id}`
                );
                const data = await response.json();
                await updatePurchase(data);
                console.log(purchase);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `https://coinstance-backend.herokuapp.com/api/purchases/${props.match.params.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(purchase),
                }
            );
            const data = await response.json();

            updatePurchase({ ...purchase, ...data });

            history.push("/portfolio");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        updatePurchase({
            ...purchase,
            [event.target.name]: event.target.value,
        });
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `https://coinstance-backend.herokuapp.com/api/purchases/${props.match.params.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            await updatePurchase({});
            history.push("/portfolio");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="editcontainer">
            {Object.keys(purchase).length > 0 ? (
                <div className="editformcontainer">
                    <form className="editcontainer" onSubmit={handleSubmit}>
                        <h1> Edit Form </h1>
                        Coin Name:{" "}
                        <input
                            className="input"
                            type="text"
                            name="coin"
                            id="coin"
                            value={purchase.coin}
                            onChange={handleChange}
                        />
                        <br />
                        Price:{" "}
                        <input
                            className="input"
                            type="text"
                            name="price"
                            id="price"
                            value={purchase.price}
                            onChange={handleChange}
                        />
                        <br />
                        Shares:{" "}
                        <input
                            className="input"
                            type="text"
                            name="shares"
                            id="shares"
                            value={purchase.shares}
                            onChange={handleChange}
                        />
                        <br />
                        <button className="button" type="submit">
                            Submit Changes
                        </button>
                        <button
                            className="button is-danger"
                            type="submit"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </form>
                </div>
            ) : (
                <h1>Nothing found on </h1>
            )}
        </div>
    );
}
