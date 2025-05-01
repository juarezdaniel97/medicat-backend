import express from "express";
import { getUser, loginUser, registerUser } from "../controllers/authController.mjs";


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/login/:id', getUser);

export default router;
