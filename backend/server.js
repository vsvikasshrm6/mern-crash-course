import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js"
import productRouter from "./router/productRouter.js";

dotenv.config();
const app = express();
connectDb();
app.use(express.json());
app.use("", productRouter)

app.listen(3000);
