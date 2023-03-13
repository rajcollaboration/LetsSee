import mongoose from "mongoose";

const userScheema =new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    phoneNumber:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        min:8,
        max:20
    },
    fullName:{
        type: String,
        required: true,
    },
    roll:{
        type:String,
        default: 'user'
    },
},
{ timestamps: true }
)

export default mongoose.model('User',userScheema);