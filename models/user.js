import mongoose from "mongoose";

const userScheema =new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
        unique: true,
    },
    roll:{
        type:String,
        default: 'user'
    },
},
{ timestamps: true }
)

export default mongoose.model('User',userScheema);