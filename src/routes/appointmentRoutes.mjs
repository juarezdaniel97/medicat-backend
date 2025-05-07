import express from "express";
import { 
    createAppointment, 
    deleteAppointment, 
    getAppointment, 
    listAppointment, 
    updateAppointment 
} from "../controllers/appointmentController.mjs";
import { verifyToken } from "../middleware/authMiddleware.mjs";


const router = express.Router();

//Crear un turno
router.post("/turno/create", verifyToken, createAppointment);

//Actualizar un turno
router.put("/turno/update/:id", verifyToken ,updateAppointment);

//Eliminar un turno
router.delete("/turno/delete/:id", verifyToken ,deleteAppointment);

//Obtener todos los turnos 
router.get("/turno/list", verifyToken ,listAppointment);

//Obtener turno por ID
router.get("/turno/:id", verifyToken ,getAppointment);

export default router;