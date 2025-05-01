import express from "express";
import { getUser, loginUser, registerUser } from "../controllers/authController.mjs";


const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/auth/:id', getUser);

export default router;
