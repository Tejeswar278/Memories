import mongoose from "mongoose";
import PostModel from "../models/postModel.js";
import postModel from "../models/postModel.js"

export const getPosts = async (req, res)=> {
    try {
        const postMessages = await postModel.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res)=> {
    const post = req.body;
    const newPost = new postModel(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updatePost = async (req,res) => {
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with the id");

    const updatePost = await PostModel.findByIdAndUpdate(_id,post,{new : true})
    res.json(updatePost)

}