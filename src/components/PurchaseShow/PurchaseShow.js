import React from "react";
import "./purchaseshow.css";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

function PurchaseShow(props) {
    // console.log(props);
    const { _id, coin, price, shares } = props.purchase;

    console.log(_id);

    // const coinAPI =
    //     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ceos%2Cripple%2Clitecoin&vs_currencies=usd";
    // const [coinData, setCoinData] = useState({});

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch(coinAPI);
    //             const data = await response.json();
    //             setCoinData({ ...data });
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     })();
    // }, []);
    const history = useHistory();

    // const handleEdit = () => {
    //     console.log(history);
    // };
    return (
        <div className="">
            <table className="tablecontainer">
                <tr>
                    <td>{coin.toUpperCase()}</td>
                    <td>${price}</td>
                    <td>{shares}</td>
                    <td>${(shares * price).toFixed(2)}</td>
                    <td>
                        {Object.entries(props.coindata).map((coin, i) => {
                            // console.log(coin);
                            if (coin[0] === props.purchase.coin) {
                                if (coin[1].usd > props.purchase.price) {
                                    return (
                                        <span
                                            key={i}
                                            style={{ color: "green" }}
                                        >
                                            {" "}
                                            $
                                            {(
                                                coin[1].usd -
                                                props.purchase.price
                                            ).toFixed(2)}{" "}
                                            (
                                            {(
                                                ((coin[1].usd -
                                                    props.purchase.price) /
                                                    props.purchase.price) *
                                                100
                                            ).toFixed(2)}
                                            %){" "}
                                        </span>
                                    );
                                } else if (coin[1].usd < props.purchase.price) {
                                    return (
                                        <span key={i} style={{ color: "red" }}>
                                            {" "}
                                            $
                                            {(
                                                coin[1].usd -
                                                props.purchase.price
                                            ).toFixed(2)}{" "}
                                            (
                                            {(
                                                ((coin[1].usd -
                                                    props.purchase.price) /
                                                    coin[1].usd) *
                                                100
                                            ).toFixed(2)}
                                            %)
                                        </span>
                                    );
                                } else {
                                    return coin[1].usd - props.purchase.price;
                                }
                            }
                        })}
                    </td>
                    <td>
                        <Link to={`/${_id}`}>EDIT</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default PurchaseShow;
