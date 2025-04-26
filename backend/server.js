import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js"
<<<<<<< HEAD
import productRouter from "./router/productRouter.js";

dotenv.config();
const app = express();
connectDb();
app.use(express.json());
app.use("", productRouter)
=======

dotenv.config();
const app = express();

app.get('/', (req, res)=>{
    connectDb();
    res.send('Hello worldfdsgfd');
})
>>>>>>> faacb99c453b79c6931c5d2d15f939f9b9af6ca8

app.listen(3000);
