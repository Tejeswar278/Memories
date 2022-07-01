import mongoose from "mongoose";

const connect = () => {
    mongoose.connect("mongodb+srv://epj:epj_2708@cluster0.uklfn.mongodb.net/NodeBasic?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
}

export default connect;