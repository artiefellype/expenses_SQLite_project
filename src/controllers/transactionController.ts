import { Request, Response } from "express"
import { badRequest, internalServerError } from "../services/util"
import { Transaction, transactionModel } from "../models/transactionModel"

const insertTransaction = (req: Request, res: Response) => {
    {
        const transaction = req.body

        if(!transaction) return badRequest(res, "Usuario inválido")
        if(!transaction.user_id) return badRequest(res, "Transação inválida: Usuário não pode ser indefinido")
        if(!transaction.category) return badRequest(res, "Transação inválida: Informe uma categoria")
        if(!transaction.value) return badRequest(res, "Transação inválida: Informe um valor válido")
    }

    const transaction = req.body as Transaction
    const user = req.body.user_id
    transactionModel.createTransaction(transaction, user).then(id => {
        res.json({
            id: id
        })
    }).catch(err => internalServerError(res, err))
}

const getAllTransactions = (req: Request, res: Response) => {

    transactionModel.getTransactions().then( transactions => {
        res.json(transactions)
    }).catch(err => internalServerError(res, err))

}

export const transactionController = {
    insertTransaction,
    getAllTransactions,
}