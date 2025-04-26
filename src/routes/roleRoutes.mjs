
import express from 'express';
import { createRole, deleteRole, updateRole } from '../controllers/roleController.mjs';


const router = express.Router();

router.post("/roles/", createRole);
router.put("/roles/:id", updateRole);
router.delete("/roles/:id", deleteRole);

export default router;