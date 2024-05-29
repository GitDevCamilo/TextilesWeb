import express from "express";
import * as fullController from "../controllers/full.controller.js";

const router = express.Router();

router.get("/listFull", fullController.showFullList);

export default router;
