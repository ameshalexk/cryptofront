import React, { useState } from "react";
import "./PurchaseForm.css";



const PurchaseForm = () => {
    const [shares, setShares] = useState('12');
    const [price, setPrice] = useState('26.00');

    return (
    <>
     <form>
    <h1 classname="purchase-form">Purchase Form</h1>
     <select>
      <option>Select Coin</option>
      <option>ETHEREUM</option>
      <option>BITCOIN</option>
      <option>EOS</option>
      <option>LITECOIN</option>
      <option>RIPPLE</option>
    </select>   
    <label className="purchase-form-shares"> Shares:
        <input type="number" value={shares} onChange={e => setShares(e.target.shares)} />
      </label>
    <label> Price Per Share:
        <input type="number" value={price} onChange={e => setPrice(e.target.price)}  />
            </label>
      <button className="button" type="submit"  >
         SUBMIT 
      </button>
     </form>
  </>
    );
};

export default PurchaseForm;
