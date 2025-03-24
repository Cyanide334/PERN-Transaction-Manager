import express from "express";
import { getTransactions, getTransaction, createTransaction, updateTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", getTransactions);
router.get("/:id", getTransaction);
router.post("/", createTransaction);
router.put("/:id", updateTransaction);

export default router;
