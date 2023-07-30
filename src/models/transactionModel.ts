import { dbQuery } from "../services/db";

export enum TransactionCategories {
  "ALIMENTATION",
  "CLOTHING",
  "HOUSING",
  "TRANSPORTATION",
  "HEALTH",
  "EDUCATION",
  "ENTERTAINMENT",
  "ELECTRONICS",
  "PERSONAL_CARE",
  "UTILITIES",
  "TRAVEL",
  "GIFTS_AND_DONATIONS",
}
export interface Transaction {
  id: number;
  user_id: number;
  category: TransactionCategories;
  value: number;
  created_at: Date;
}

const createTransaction = async (transaction: Transaction, user_id: number) => {
  await dbQuery(
    "INSERT INTO user_transactions (user_id, category, value, created_at) VALUES (?,?,?,?)",
    [user_id, transaction.category, transaction.value, new Date()]
  );

  return "Transaction created";
};

const getTransactions = async () => {
  const all_transactions = await dbQuery("SELECT * FROM user_transactions")

  return all_transactions as Transaction[]
}

export const transactionModel = {
  createTransaction,
  getTransactions
};
