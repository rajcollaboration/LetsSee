import mongoose from "mongoose";


const addproduct = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
})

export default mongoose.model('product',addproduct);