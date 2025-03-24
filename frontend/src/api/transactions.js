// import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL;

// export const fetchTransactions = async () => {
//   const response = await axios.get(API_URL);
//   console.log(response.data, response.json());
//   return response.data;
// };

// export const fetchTransactionById = async (id) => {
//     const response = await axios.get(`${API_URL}/${id}`);
//     console.log(response.data, response.json());
//     return response.data;
// }

// export const addTransaction = async (transaction) => {
//   const response = await axios.post(API_URL, transaction);
//   return response.data;
// };

// export const updateTransaction = async (id, updatedData) => {
//   const response = await axios.put(`${API_URL}/${id}`, updatedData);
//   return response.data;
// };


const dummyTransaction = {
    id: 1,
    amount_cents: 5000, // $50.00 in cents
    type: "credit",
    description: "Test transaction",
    created_at: "2025-03-24T12:00:00Z",
    updated_at: "2025-03-24T12:30:00Z",
  };
  
  export const fetchTransactions = async () => {
    console.log("Fetching all transactions (mocked)");
    // add a timer to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [dummyTransaction, { ...dummyTransaction, id: 2, amount_cents: 7500 }];
  };
  
  export const fetchTransactionById = async (id) => {
    console.log(`Fetching transaction with ID: ${id} (mocked)`);
    return { ...dummyTransaction };
  };
  
  export const addTransaction = async (transaction) => {
    console.log("Adding transaction (mocked):", transaction);
    return { id: Math.floor(Math.random() * 1000), ...transaction };
  };
  
  export const updateTransaction = async (id, updatedData) => {
    console.log(`Updating transaction ID ${id} (mocked):`, updatedData);
    return { id, ...updatedData, updated_at: new Date().toISOString() };
  };
  