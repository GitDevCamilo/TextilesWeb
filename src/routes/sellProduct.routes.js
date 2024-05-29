import express from "express";
import * as sellProductController from "../controllers/sellProduct.controller.js";

const router = express.Router();

router.get("/addSellProd", sellProductController.showAddForm);
router.post("/addSellProd", sellProductController.addSellProduct);
router.get("/listSellProd", sellProductController.showSellProductlList);
router.get("/editSellProd/:ven_id", sellProductController.showEditForm);
router.post("/editSellProd/:ven_id", sellProductController.editSellProduct);
router.get("/deleteSellProd/:ven_id", sellProductController.deleteSellProduct);

export default router;
