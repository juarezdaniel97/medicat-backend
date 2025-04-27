import express from "express"
import { createDoctor, deleteDoctor, getDoctor, listDoctor, updatedoctor } from "../controllers/doctorProfileController.mjs";

const router = express.Router();

// Crear perfil de doctor
router.post('/doctor/create', createDoctor);

// Actualizar perfil doctor
router.put('/doctor/update/:id', updatedoctor);

// Eliminar perfil doctor
router.delete('/doctor/delete/:id', deleteDoctor);

// Obtener todos los doctores 
router.get('/doctor/list', listDoctor);

// Obtener perfil del doctor por ID
router.get('/doctor/:id', getDoctor);

export default router;