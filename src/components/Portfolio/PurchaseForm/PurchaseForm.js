import React from "react";
import "./PurchaseForm.css";

const PurchaseForm = (props) => {
    return (
        <>
            <form>
                <h1 classname="purchase-form">Purchase Form</h1>
                <select
                    type="number"
                    name="coin"
                    value={props.newPurchase.coin}
                    onChange={props.handleChange}
                >
                    <option>Select Coin</option>
                    <option>bitcoin</option>
                    <option>eos</option>
                    <option>ethereum</option>
                    <option>litecoin</option>
                    <option>ripple</option>
                </select>
                <label className="purchase-form-shares">
                    {" "}
                    Shares:
                    <input
                        type="text"
                        name="shares"
                        value={props.newPurchase.shares}
                        onChange={props.handleChange}
                    />
                </label>
                <label>
                    {" "}
                    Price Per Share:
                    <input
                        type="text"
                        name="price"
                        value={props.newPurchase.price}
                        onChange={props.handleChange}
                    />
                </label>
                <button
                    className="button"
                    type="submit"
                    onClick={props.handleSubmit}
                >
                    SUBMIT
                </button>
            </form>
        </>
    );
};

export default PurchaseForm;
