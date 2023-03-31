import express from 'express';
import { scrappAmazone } from '../controllers/scrapper.js';

const router = express.Router();
router.post("/amazon",scrappAmazone);
export default router
