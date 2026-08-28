require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingModle");
const { PositionsModel } = require("./model/PositionsModle");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGODB_URL;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch holdings" });
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch positions" });
    }
});

app.listen(PORT, async () => {
    console.log(`App Started on port ${PORT}`);

    try {
        await mongoose.connect(uri);
        console.log("DB connected");
    } catch (err) {
        console.log("DB connection error:", err);
    }
});