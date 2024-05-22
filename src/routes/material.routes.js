import express from "express";
import * as materialController from "../controllers/material.controller.js";

const router = express.Router();

router.get("/addMat", materialController.showAddForm);
router.post("/addMat", materialController.addMaterial);
router.get("/listMat", materialController.showMaterialList);
router.get("/editMat/:mat_id", materialController.showEditForm);
router.post("/editMat/:mat_id", materialController.editMaterial);
router.get("/deleteMat/:mat_id", materialController.deleteMaterial);

export default router;
