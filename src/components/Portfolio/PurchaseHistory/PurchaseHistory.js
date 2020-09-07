// import React from "react";
// import './purchasehistory.css';
// const PurchaseHistory = () => {
//   return (
//     <>
//       <div className="purchasehistory">
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Shares</th>
//             <th>Price</th>
//             <th>Total</th>
//             <th>Change</th>
//           </tr>
//           <tr>
//             <td>Alfreds Futterkiste</td>
//             <td>Maria Anders</td>
//             <td>Germany</td>
//           </tr>
//           <tr>
//             <td>Centro comercial Moctezuma</td>
//             <td>Francisco Chang</td>
//             <td>Mexico</td>
//           </tr>
//           <tr>
//             <td>Ernst Handel</td>
//             <td>Roland Mendel</td>
//             <td>Austria</td>
//           </tr>
//           <tr>
//             <td>Island Trading</td>
//             <td>Helen Bennett</td>
//             <td>UK</td>
//           </tr>
//           <tr>
//             <td>Laughing Bacchus Winecellars</td>
//             <td>Yoshi Tannamuri</td>
//             <td>Canada</td>
//           </tr>
//           <tr>
//             <td>Magazzini Alimentari Riuniti</td>
//             <td>Giovanni Rovelli</td>
//             <td>Italy</td>
//           </tr>
//         </table>
//       </div>
//     </>
//   );
// };

// export default PurchaseHistory;


import React, { useState, useEffect } from "react";
import axios from "axios";

import PurchaseShow from "../../PurchaseShow/PurchaseShow.js";
import "./purchasehistory.css"
const PurchaseList = (props) => {
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/purchases");
      setPurchase(response.data);
    }
    fetchData();
  }, []);

  const showPurchases = purchase.map((purchase, i) => {
    return (
      <div >
      <PurchaseShow purchase={purchase}  />
  </div>
    );
  });

  return (<div>
            <div className="tablecontainer">
            <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Shares</th>
            <th>Total</th>
            <th>P&L</th>
          </tr> <br/>
            
            </div>
            {showPurchases}
          </div>);
};

export default PurchaseList;