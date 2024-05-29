import express from "express";
import * as productController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/addProd", productController.showAddForm);
router.post("/addProd", productController.addProduct);
router.get("/listProd", productController.showProductlList);
router.get("/editProd/:prod_id", productController.showEditForm);
router.post("/editProd/:prod_id", productController.editProduct);
router.get("/deleteProd/:prod_id", productController.deleteProduct);

export default router;
