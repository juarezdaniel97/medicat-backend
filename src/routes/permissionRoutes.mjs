import express from "express";
import { createPermission, deletePermission, updatePermission } from "../controllers/permissionController.mjs";

const router = express.Router();

router.post("/permissions/", createPermission);
router.put("/permissions/:id", updatePermission);
router.delete("/permissions/:id", deletePermission);

export default router;