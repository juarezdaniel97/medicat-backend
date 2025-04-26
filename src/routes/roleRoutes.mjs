
import express from 'express';
import { createRole, deleteRole, updateRole } from '../controllers/roleController.mjs';


const router = express.Router();

router.post("/", createRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

export default router;