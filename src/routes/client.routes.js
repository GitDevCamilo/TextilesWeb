import express from "express";
import * as clientController from "../controllers/client.controller.js";

const router = express.Router();

router.get("/addClie", clientController.showAddForm);
router.post("/addClie", clientController.addClient);
router.get("/listClie", clientController.showClientList);
router.get("/editClie/:clie_id", clientController.showEditForm);
router.post("/editClie/:clie_id", clientController.editClient);
router.get("/deleteClie/:clie_id", clientController.deleteClient);

export default router;
