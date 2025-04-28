
import express from "express";
import { createPatient, deletePatient, getPatient, listPatient, updatePatient } from "../controllers/patientProfileController.mjs";

const router = express.Router();

// Crear perfil de paciente
router.post('/paciente/create', createPatient);

// Actualizar perfil paciente
router.put('/paciente/update/:id', updatePatient);

// Eliminar perfil paciente
router.delete('/paciente/delete/:id', deletePatient);

// Obtener todos los pacientes 
router.get('/paciente/list', listPatient);

// Obtener perfil del paciente por ID
router.get('/paciente/:id', getPatient);

export default router;