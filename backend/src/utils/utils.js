import { TRANSACTION_TYPES } from "../config/constants.js";

/**
 * @param {string} type
 * @returns {boolean}
 */
export const isValidTransactionType = (type) => {
  return Object.values(TRANSACTION_TYPES).includes(type);
};
