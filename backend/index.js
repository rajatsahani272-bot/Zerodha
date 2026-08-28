require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingModle");
const { PositionsModel } = require("./model/PositionsModle");
const { OrdersModel } = require("./model/OrdersModle");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGODB_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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
        if (!name || !qty || !price || !mode) {
            return res.status(400).json({
                message: "All order fields are required",
            });
        }

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

app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const existingUser = await UserModel.findOne({
            email: email.toLowerCase(),
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "Account created successfully",
        });
    } catch (err) {
        console.error("Signup error:", err);

        res.status(500).json({
            message: "Signup failed",
        });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const user = await UserModel.findOne({
            email: email.toLowerCase(),
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        if (!JWT_SECRET) {
            return res.status(500).json({
                message: "JWT_SECRET is missing",
            });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
            },
            JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        console.error("Login error:", err);

        res.status(500).json({
            message: "Login failed",
        });
    }
});

app.get("/auth/me", async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Not authenticated",
            });
        }

        if (!JWT_SECRET) {
            return res.status(500).json({
                message: "JWT_SECRET is missing",
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await UserModel.findById(decoded.userId).select(
            "-password"
        );

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            authenticated: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        console.error("Auth error:", err);

        res.status(401).json({
            message: "Invalid or expired token",
        });
    }
});

app.post("/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    });

    res.status(200).json({
        message: "Logout successful",
    });
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Zerodha Clone Backend is running",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});