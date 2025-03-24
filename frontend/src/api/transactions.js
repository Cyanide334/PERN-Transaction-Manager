import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTransactions = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchTransactionById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

// Adding account_number here because it's required in the backend,
// and I didnt have time to refactor the backend to remove it
export const addTransaction = async (transaction) => {
    transaction.account_number = 1000;
    const response = await axios.post(API_URL, transaction);
    return response.data;
};

export const updateTransaction = async (id, updatedData) => {
    updatedData.account_number = 1000;
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};
  