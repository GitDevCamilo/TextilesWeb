import express from "express";
import * as sellController from "../controllers/sell.controller.js";

const router = express.Router();

router.get("/addSell", sellController.showAddForm);
router.post("/addSell", sellController.addSell);
router.get("/listSell", sellController.showSellList);
router.get("/editSell/:ven_id", sellController.showEditForm);
router.post("/editSell/:ven_id", sellController.editSell);
router.get("/deleteSell/:ven_id", sellController.deleteSell);

export default router;
