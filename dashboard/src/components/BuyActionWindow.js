import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const { closeBuyWindow, closeSellWindow } =
        useContext(GeneralContext);

    const handleActionClick = async () => {
        try {
            const response = await axios.post(
                "https://zerodha-ezwn.onrender.com/newOrder",
                {
                    name: uid,
                    qty: stockQuantity,
                    price: stockPrice,
                    mode: mode,
                }
            );

            console.log("Order created:", response.data);

            if (mode === "BUY") {
                closeBuyWindow();
            } else {
                closeSellWindow();
            }
        } catch (err) {
            console.error("Axios Error:", err);
            console.error("Response:", err.response?.data);
        }
    };

    const handleCancelClick = () => {
        if (mode === "BUY") {
            closeBuyWindow();
        } else {
            closeSellWindow();
        }
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>

                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            onChange={(e) =>
                                setStockQuantity(Number(e.target.value))
                            }
                            value={stockQuantity}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Price</legend>

                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            min="0"
                            onChange={(e) =>
                                setStockPrice(Number(e.target.value))
                            }
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>

                <div>
                    <Link
                        className={`btn ${
                            mode === "BUY"
                                ? "btn-blue"
                                : "btn-red"
                        }`}
                        onClick={handleActionClick}
                    >
                        {mode === "BUY" ? "Buy" : "Sell"}
                    </Link>

                    <Link
                        to=""
                        className="btn btn-grey"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;