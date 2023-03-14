import express from 'express';
import { flipcart } from '../controllers/addproduct.js';


const router = express.Router();


router.post('/flipcart',flipcart);


export default router
