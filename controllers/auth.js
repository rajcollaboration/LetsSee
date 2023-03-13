import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import  Jwt  from "jsonwebtoken";
import user from "../models/user.js";
import { createError } from "../errorhandle.js";


// start register api
export const register =async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new user({...req.body,password: hash});

        await newUser.save();
        res.status(200).send("User has been created!");
    } catch (error) {
        next(error);
    }
}
// start login api
export const login = async (req,res,next)=>{
    try {
        const user = await user.findOne({userName: req.body.userName});
        if (!user) return next(createError(404,"user not found"));
        const isCorrect = await bcrypt.compare(req.body.password,user.password);
        if (!isCorrect) return next(createError(400,"Wrong user id or password"));

        const token = Jwt.sign({ id: user._id }, "dgfjsdgfjsdgfjsdgf3232%%&");
        const { password, ...others } = user._doc;
        res.status(200).json(token,others)

    } catch (error) {
        next(error);
    }
}