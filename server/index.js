import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js"

import connect from "./config/db.js";

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors())

app.use("/posts", postRoutes)
   
app.listen(process.env.PORT || 5000,async ()=> {
    try {
        await connect();
        console.log(`server started on port ${process.env.PORT || 5000}`);
    } catch (error) {
        console.log(error.message);
    }
})