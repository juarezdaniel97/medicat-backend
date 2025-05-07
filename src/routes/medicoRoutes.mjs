import express from "express"
import { 
    createMedico, 
    deleteMedico, 
    getAppointmentByPatient, 
    getMedico, 
    listMedico, 
    updateMedico } from "../controllers/medicoProfileController.mjs";
import { verifyToken } from "../middleware/authMiddleware.mjs";

const router = express.Router();

// Crear perfil de doctor
router.post('/medico/create', verifyToken, createMedico);

// Actualizar perfil doctor
router.put('/medico/update/:id', verifyToken, updateMedico);

// Eliminar perfil doctor
router.delete('/medico/delete/:id',verifyToken, deleteMedico);

// Obtener todos los doctores 
router.get('/medico/list', verifyToken, listMedico);

// Obtener perfil del doctor por ID
router.get('/medico/:id', verifyToken, getMedico);

//Obtener turnos desigados
router.get('/medico/turnos/:id', verifyToken, getAppointmentByPatient);


export default router;