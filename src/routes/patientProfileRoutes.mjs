import express from "express";

import { verifyToken } from "../middleware/authMiddleware.mjs";
import { 
    createProfile, 
    deleteProfile, 
    getAppointmentByPatient, 
    getProfile, 
    listProfile, 
    updateProfile } from "../controllers/patientProfileController.mjs";

const router = express.Router();

//Crear un perfil (datos basicos: nombre, sexo, dirección, etc)
router.post("/paciente/create", verifyToken, createProfile);

//Actualizar un perfil
router.put("/paciente/update/:id", verifyToken, updateProfile);

//Eliminar un perfil
router.delete("/paciente/delete/:id",verifyToken, deleteProfile);

//Obtener todos los perfiles 
router.get("/paciente/list", verifyToken, listProfile);

//Obtener perfil por ID
router.get("/paciente/:id", verifyToken, getProfile);

//Obtener los turnos del paciente
router.get("/paciente/turno/:id", verifyToken, getAppointmentByPatient);

export default router;