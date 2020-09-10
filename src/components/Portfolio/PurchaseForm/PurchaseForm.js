import React from "react";
import "./PurchaseForm.css";

const PurchaseForm = (props) => {
    return (
        <div className="purchaseformcontainer">
            <form className='purchaseform'>
                <div className="formh1">
                <h1 >Purchase Form</h1>
                </div>
                <div className="formselect">
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
                </div>
                <div className=" forminput1">
                    <label htmlFor="shares">Shares:</label>
                    <input
                        className="input"
                        type="text"
                        name="shares"
                        value={props.newPurchase.shares}
                        onChange={props.handleChange}
                    />
                    </div>
                    <div className=" forminput2">
                    <label htmlFor="price">Price Per Share:</label>
                    <input
                        className="input "
                        type="text"
                        name="price"
                        value={props.newPurchase.price}
                        onChange={props.handleChange}
                    />
                    </div>
                    <div className=" formsubmit">
                <button
                    className="button " 
                    type="submit"
                    onClick={props.handleSubmit}
                >
                    SUBMIT
                </button>
                </div>
            </form>
        </div>
    );
};

export default PurchaseForm;
