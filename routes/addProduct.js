import express from 'express';
import { flipcart } from '../controllers/addproduct.js';
import multer from 'multer';

const upload  = multer({dest:'uploads/'});

const router = express.Router();


router.post('/flipcart',upload.single('product'),flipcart);


export default router
