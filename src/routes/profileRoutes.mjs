import express from "express";
import { 
    createProfile, 
    updateProfile,
    deleteProfile,
    getProfile,
    listProfile
} from "../controllers/profileController.mjs";
import { verifyToken } from "../middleware/authMiddleware.mjs";

const router = express.Router();

//Crear un perfil (datos basicos: nombre, sexo, dirección, etc)
router.post("/profile/create", verifyToken, createProfile);

//Actualizar un perfil
router.put("/profile/update/:id", verifyToken, updateProfile);

//Eliminar un perfil
router.delete("/profile/delete/:id",verifyToken, deleteProfile);

//Obtener todos los perfiles 
router.get("/profiles/list", verifyToken, listProfile);

//Obtener perfil por ID
router.get("/profile/:id", verifyToken, getProfile);

export default router;