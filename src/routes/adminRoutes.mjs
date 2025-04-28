import express from "express";
import { createAdmin, deleteAdmin, getAdmin, listAdmin, updateAdmin } from "../controllers/adminProfileController.mjs";


const router = express.Router();

// Crear perfil de administrador
router.post("/admin/create", createAdmin);

// Actualizar perfil administrador
router.put("/admin/update/:id", updateAdmin);

// Eliminar perfil administrador
router.delete("/admin/delete/:id", deleteAdmin);

// Obtener todos los administrador 
router.get("/admin/list", listAdmin);

// Obtener perfil del administrador por ID
router.get("/admin/:id", getAdmin);

export default router;