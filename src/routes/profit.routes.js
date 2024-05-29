import express from "express";
import * as profitController from "../controllers/profit.controller.js";

const router = express.Router();

router.get("/listProfits", profitController.showProfitsList);

export default router;
