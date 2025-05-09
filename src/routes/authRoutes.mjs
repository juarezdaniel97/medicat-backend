import express from "express";
import { getUser, loginUser, registerUser, updateUser } from "../controllers/authController.mjs";


const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/auth/:id', getUser);
router.put('/auth/:id', updateUser);
export default router;
