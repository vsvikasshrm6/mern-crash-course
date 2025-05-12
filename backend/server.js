import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js"
import productRouter from "./router/productRouter.js";
import cors from "cors"

dotenv.config();
const app = express();
app.use(cors({origin: "*"}));
connectDb();
app.use(express.json());
app.use("", productRouter)
app.listen(3000);
