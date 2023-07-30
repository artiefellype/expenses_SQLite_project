import { Router } from "express";
import { transactionController } from "../controllers/transactionController";

const transactionRouter = Router()

transactionRouter.post("/", transactionController.insertTransaction)
transactionRouter.get("/", transactionController.getAllTransactions)

export {
    transactionRouter
}