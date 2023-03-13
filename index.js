import express from 'express';
import mongoose  from 'mongoose';
import env from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouts from './routes/auth.js';

const app = express();
env.config();
app.use(cookieParser());
app.use(express.json());
const port = 8800 

// connecting to the db
const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("DB connected");
    }).catch((err)=>{
        console.log(err);
    })
}

// middleware
app.use("/api/auth", authRouts);


// error handling
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something Went Wrong";
    return res.status(status).json({
        success: false,
        message: message,
        status: status
    });
});

// creating the server
app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
    connect();
})

