import express from 'express';
import { createTransaction, deleteTransaction, getTransactionByuserId, getSummaryByUserId } from '../controllers/transactionController.js';

const router = express.Router();

router.get("/:userId", getTransactionByuserId);

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userId", getSummaryByUserId);

export default router;  