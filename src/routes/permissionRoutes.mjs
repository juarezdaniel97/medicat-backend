import express from "express";
import { createPermission, deletePermission, updatePermission } from "../controllers/permissionController.mjs";

const router = express.Router();

router.post("/", createPermission);
router.put("/:id", updatePermission);
router.delete("/:id", deletePermission);

export default router;