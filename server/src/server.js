import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import paperRoutes from "./routes/paperRoutes.js";
dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/papers", paperRoutes);
app.get("/", (req, res) => {
    res.send("Research Paper Assistant API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});