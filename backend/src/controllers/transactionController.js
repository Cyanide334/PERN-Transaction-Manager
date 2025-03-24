import * as transactionService from "../services/transactionService.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.fetchAllTransactions();
    res.json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.fetchTransactionById(req.params.id);
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTransaction = async (req, res) => {
  try {
    const { amount_cents, type, description, account_number } = req.body;
    const transaction = await transactionService.addTransaction(amount_cents, type, description, account_number);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTransaction = await transactionService.modifyTransaction(id, req.body);
    if (!updatedTransaction) return res.status(404).json({ error: "Transaction not found" });
    res.json(updatedTransaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
