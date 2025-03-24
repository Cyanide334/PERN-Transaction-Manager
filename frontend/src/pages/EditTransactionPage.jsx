import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTransactionById, updateTransaction } from "../api/transactions";
import { TRANSACTION_TYPES } from "../utils/constants";
import { Bars } from "react-loader-spinner";

const EditTransactionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ amount: "", type: TRANSACTION_TYPES.CREDIT, description: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTransaction = async () => {
      setLoading(true);
      try {
        const tx = await fetchTransactionById(id);
        if (!tx) {
          alert("Transaction not found!");
          navigate("/");
          return;
        }
        setFormData({ amount: tx.amount_cents / 100, type: tx.type, description: tx.description });
        
      }
      catch (error) {
        console.error("Error loading transaction:", error);
        alert("Error loading transaction!");
        navigate("/");
        return;
      }
      setLoading(false); 
    };
    loadTransaction();
  }, [id, navigate]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let updatedTransaction = formData;
      updatedTransaction.amount_cents = updatedTransaction.amount * 100;
      delete updatedTransaction.amount;
      await updateTransaction(id, updatedTransaction);
    } catch (error) {
      console.error("Error updating transaction:", error);
      alert("Error updating transaction!");
      setLoading(false);
      return;
    }
    finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Edit Transaction</h2>
        {loading ? (
          <div className="d-flex justify-content-center">
            <Bars height="80" width="80" color="#4fa94d" visible={true} />
          </div>
        ) : (
          <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input
                name="amount"
                type="number"
                className="form-control"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Type</label>
              <select name="type" className="form-select" value={formData.type} onChange={handleChange} required>
                {Object.values(TRANSACTION_TYPES).map((type) => (
                  <option key={type} value={type}>{type.toUpperCase()}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                name="description"
                type="text"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="container d-flex justify-content-center">
              <button type="submit" className="btn btn-primary me-5">Update Transaction</button>
              <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditTransactionPage;
