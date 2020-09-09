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
                    `http://localhost:3001/api/purchases/${props.match.params.id}`
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
                `http://localhost:3001/api/purchases/${props.match.params.id}`,
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
                `http://localhost:3001/api/purchases/${props.match.params.id}`,
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
        <div className="Page-wrapper">
            {Object.keys(purchase).length > 0 ? (
                <div>
                    <form onSubmit={handleSubmit} className="task-form">
                        <h1> Edit Form </h1>
                        Coin Name:{" "}
                        <input
                            type="text"
                            name="coin"
                            id="coin"
                            value={purchase.coin}
                            onChange={handleChange}
                        />
                        <br />
                        Price:{" "}
                        <input
                            type="text"
                            name="price"
                            id="price"
                            value={purchase.price}
                            onChange={handleChange}
                        />
                        <br />
                        Shares:{" "}
                        <input
                            type="text"
                            name="shares"
                            id="shares"
                            value={purchase.shares}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="submit">Submit Changes</button>
                    </form>
                </div>
            ) : (
                <h1>Nothing found on </h1>
            )}
            <h3>
                <form>
                    <button type="submit" onClick={handleDelete}>
                        Delete
                    </button>
                </form>
            </h3>
        </div>
    );
}

// import React from "react";

// function Edit(props) {
//   return (
//     <div className="signupform">
//       <h2>EDIT</h2>
//       <form>
//         <div className="field">
//           <label className="label">Name</label>
//           <div className="control">
//             <input className="input" type="text"  />
//           </div>
//         </div>

//         <div className="field">
//           <label className="label">Price</label>
//           <div className="control">
//             <input
//               className="input"
//               type="email"

//             />
//           </div>
//         </div>
//         <div className="field">
//           <label className="label">Shares</label>
//           <div className="control">
//             <input
//               className="input"
//               type="email"

//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Edit;
