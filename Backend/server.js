// console.log("Hello");

//let express = require('express') // common Js

import express from "express"; //ES6-module pattern
import dotenv from "dotenv"; //ES6 -module pattern
import { connectWithMongoDB } from "./Config/db.js";
import product from "./routes/productRoutes.js";


dotenv.config({
	path: "./Config/config.env",
});

let app = express();
const PORT = process.env.PORT | 5001;

// app.listen(5000, () => {

// 	console.log('server started 5000')
// })

connectWithMongoDB();
app.use(express.json())
app.use("/api/v1", product);


app.listen(PORT, () => {
	console.log(`Server Started ${PORT}`);
});