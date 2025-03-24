import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../api/transactions";
import { Bars } from "react-loader-spinner";

const AddTransactionPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ amount: "", type: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addTransaction({ ...formData, amount_cents: formData.amount * 100 });
    }
    catch (error) {
      console.error("Error adding transaction:", error);
    }
    finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Transaction</h2>
      {loading ? <Bars height="80" width="80" color="#4fa94d" visible={true} /> : (
        <form onSubmit={handleSubmit}>
          <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
          <select name="type" onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          <input name="description" type="text" placeholder="Description" onChange={handleChange} required />
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
};

export default AddTransactionPage;
