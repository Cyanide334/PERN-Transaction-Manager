import supabase from "../config/supabaseClient.js";

/**
 * @returns {Promise<Object[]>} Array of transactions
 */
export const getAllTransactions = async () => {
  const { data, error } = await supabase
    .from("transactions")
    .select("id, amount_cents, type, description, account_number, created_at, updated_at");

  if (error) throw new Error(error.message);
  return data;
};

/**
 * @param {number} id - Transaction ID
 * @returns {Promise<Object|null>} Transaction object or null
 */
export const getTransactionById = async (id) => {
  const { data, error } = await supabase
    .from("transactions")
    .select("id, amount_cents, type, description, account_number, created_at, updated_at")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

/**
 * @param {Object} transaction - Transaction data
 * @returns {Promise<Object>} Created transaction
 */
export const createTransaction = async (transaction) => {
  const { data, error } = await supabase
    .from("transactions")
    .insert([transaction])
    .select("id, amount_cents, type, description, account_number, created_at, updated_at")
    .single();

  if (error) throw new Error(error.message);
  return data;
};

/**
 * @param {number} id - Transaction ID
 * @param {Object} updatedFields - Fields to update
 * @returns {Promise<Object|null>} Updated transaction or null if not found
 */
export const updateTransaction = async (id, updatedFields) => {
  const { data, error } = await supabase
    .from("transactions")
    .update(updatedFields)
    .eq("id", id)
    .select("id, amount_cents, type, description, account_number, created_at, updated_at")
    .single();

  if (error) throw new Error(error.message);
  return data;
};
