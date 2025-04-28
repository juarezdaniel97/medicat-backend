import express from "express";
import { 
    createAppointment, 
    deleteAppointment, 
    getAppointment, 
    listAppointment, 
    updateAppointment 
} from "../controllers/appointmentController.mjs";


const router = express.Router();

//Crear un turno
router.post("/turno/create", createAppointment);

//Actualizar un turno
router.put("/turno/update/:id", updateAppointment);

//Eliminar un turno
router.delete("/turno/delete/:id", deleteAppointment);

//Obtener todos los turnos 
router.get("/turno/list", listAppointment);

//Obtener turno por ID
router.get("/turno/:id", getAppointment);

export default router;