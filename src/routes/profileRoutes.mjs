import express from "express";
import { 
    createProfile, 
    updateProfile,
    deleteProfile,
    getProfile,
    listProfile
} from "../controllers/profileController.mjs";

const router = express.Router();

//Crear un perfil (datos basicos: nombre, sexo, dirección, etc)
router.post("/profile/create", createProfile);

//Actualizar un perfil
router.put("/profile/update/:id", updateProfile); // :id = userId

//Eliminar un perfil
router.delete("/profile/delete/:id", deleteProfile);

//Obtener todos los perfiles 
router.get("/profiles/list", listProfile);

//Obtener perfil por ID
router.get("/profile/:id", getProfile);

export default router;