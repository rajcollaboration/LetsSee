import { createError } from '../errorhandle.js';
import addproduct from '../models/addproduct.js';

export const flipcart = async(req,res,next)=>{
    try {
        const newProduct = new addproduct({...req.body})
        await newProduct.save();

        res.status(200).json({message:"success"});
    } catch (error) {
        console.log(error);
    }
}