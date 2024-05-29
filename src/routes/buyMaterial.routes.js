import express from "express";
import * as buyMaterialController from "../controllers/buyMaterial.controller.js";

const router = express.Router();

router.get("/addBuyMat", buyMaterialController.showAddForm);
router.post("/addBuyMat", buyMaterialController.addBuyMaterial);
router.get("/listBuyMat", buyMaterialController.showBuyMaterialList);
router.get("/editBuyMat/:com_id", buyMaterialController.showEditForm);
router.post("/editBuyMat/:com_id", buyMaterialController.editBuyMaterial);
router.get("/deleteBuyMat/:com_id", buyMaterialController.deleteBuyMaterial);

export default router;
