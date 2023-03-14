import jwt from 'jsonwebtoken';
import { createError } from './errorhandle';



export const varifyToken = (req,res,next)=>{
    const token = req.body.token;
    if (!token) {
        return next(createError(401,"You Are Not Authenticated"));
    }
    jwt.verify(token,process.env.JWT,(err,token)=>{
        if (err) {
            return next(createError(403,"token is not valid"))
        }
        req.token = token;
        next()
    })
}