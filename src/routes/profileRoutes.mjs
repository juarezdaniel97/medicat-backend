import express from "express";
import { 
    createProfile, 
    updateProfile,
    deleteProfile,
    getProfile,
    listProfile
} from "../controllers/profileController.mjs";

const router = express.Router();

router.post("/profile/create", createProfile);
router.put("/profile/update/:id", updateProfile); // :id = userId
router.delete("/profile/delete/:id", deleteProfile);
router.get("/profile/:id", getProfile);
router.get("/profiles/list", listProfile);

export default router;