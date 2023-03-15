import mongoose from "mongoose";


const addproduct = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    description:{
        type: String,
        unique: true
    }
})

export default mongoose.model('product',addproduct);