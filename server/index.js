import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js"



const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors())

app.use("/posts", postRoutes)
const Connect_url = "mongodb+srv://epj:epj_2708@cluster0.uklfn.mongodb.net/NodeBasic?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(Connect_url,   {useNewUrlParser: true, useUnifiedTopology: true})
.then (() => app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
}))
.catch((error)=> console.log(error.message))
   
