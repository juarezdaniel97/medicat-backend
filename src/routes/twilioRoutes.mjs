import express from "express";
import { verifyToken } from "../middleware/authMiddleware.mjs";
import { enviarSMS } from "../controllers/twilioController.mjs";



const router = express.Router();

router.post('/send-sms', verifyToken, enviarSMS);

export default router