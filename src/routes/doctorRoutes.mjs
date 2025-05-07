import express from "express"
import { createDoctor, deleteDoctor, getDoctor, listDoctor, updatedoctor } from "../controllers/doctorProfileController.mjs";

const router = express.Router();

// Crear perfil de doctor
router.post('/medico/create', createDoctor);

// Actualizar perfil doctor
router.put('/medico/update/:id', updatedoctor);

// Eliminar perfil doctor
router.delete('/medicor/delete/:id', deleteDoctor);

// Obtener todos los doctores 
router.get('/medico/list', listDoctor);

// Obtener perfil del doctor por ID
router.get('/medico/:id', getDoctor);

export default router;