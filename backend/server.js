import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js"

dotenv.config();
const app = express();

app.get('/', (req, res)=>{
    connectDb();
    res.send('Hello worldfdsgfd');
})

app.listen(3000);
