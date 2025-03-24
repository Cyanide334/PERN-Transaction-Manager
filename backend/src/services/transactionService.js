import * as transactionRepo from "../repositories/transactionRepository.js";
import { isValidTransactionType } from "../utils/utils.js";

/**
 * @returns {Promise<Object[]>} Array of transactions
 */
export const fetchAllTransactions = async () => {
  return await transactionRepo.getAllTransactions();
};

/**
 * @param {number} id - Transaction ID
 * @returns {Promise<Object|null>} Transaction object or null
 */
export const fetchTransactionById = async (id) => {
  return await transactionRepo.getTransactionById(id);
};

/**
 * @param {number} amount_cents - Transaction amount
 * @param {string} type - "credit" or "debit"
 * @param {string} description - Transaction description
 * @param {string} account_number - Account number associated with transaction
 * @returns {Promise<Object>} Created transaction
 */
export const addTransaction = async (amount_cents, type, description, account_number) => {
  if (!isValidTransactionType(type)) throw new Error("Invalid transaction type");

  return await transactionRepo.createTransaction({
    amount_cents,
    type,
    description,
    account_number,
  });
};

/**
 * @param {number} id - Transaction ID
 * @param {Object} updatedFields - Fields to update
 * @returns {Promise<Object|null>} Updated transaction or null
 */
export const modifyTransaction = async (id, updatedFields) => {
  if (updatedFields.type && !isValidTransactionType(updatedFields.type)) {
    throw new Error("Invalid transaction type");
  }

  return await transactionRepo.updateTransaction(id, updatedFields);
};
