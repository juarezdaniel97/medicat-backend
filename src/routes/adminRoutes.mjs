import express from "express";
import { createAdmin, deleteAdmin, getAdmin, listAdmin, updateAdmin } from "../controllers/adminProfileController.mjs";
import { verifyToken } from "../middleware/authMiddleware.mjs";


const router = express.Router();

// Crear perfil de administrador
router.post("/admin/create", verifyToken, createAdmin);

// Actualizar perfil administrador
router.put("/admin/update/:id", verifyToken,updateAdmin);

// Eliminar perfil administrador
router.delete("/admin/delete/:id", verifyToken,deleteAdmin);

// Obtener todos los administradores del sistema
router.get("/admin/list", verifyToken,listAdmin);

// Obtener perfil del administrador por ID
router.get("/admin/:id", verifyToken,getAdmin);

export default router;