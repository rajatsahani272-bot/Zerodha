require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingModle");
const { PositionsModel } = require("./model/PositionsModle");
const { OrdersModel } = require("./model/OrdersModle");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGODB_URL;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.status(200).json(allHoldings);
    } catch (err) {
        console.error("Error fetching holdings:", err);
        res.status(500).json({
            message: "Error fetching holdings",
            error: err.message,
        });
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.status(200).json(allPositions);
    } catch (err) {
        console.error("Error fetching positions:", err);
        res.status(500).json({
            message: "Error fetching positions",
            error: err.message,
        });
    }
});

app.get("/allOrders", async (req, res) => {
    try {
        const allOrders = await OrdersModel.find({});
        res.status(200).json(allOrders);
    } catch (err) {
        console.error("Error fetching orders:", err);
        res.status(500).json({
            message: "Error fetching orders",
            error: err.message,
        });
    }
});

app.post("/newOrder", async (req, res) => {
    const { name, qty, price, mode } = req.body;

    try {
        const newOrder = new OrdersModel({
            name,
            qty,
            price,
            mode,
        });

        await newOrder.save();

        res.status(201).json({
            message: "Order created successfully",
            order: newOrder,
        });
    } catch (err) {
        console.error("Error creating order:", err);

        res.status(500).json({
            message: "Error creating order",
            error: err.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});