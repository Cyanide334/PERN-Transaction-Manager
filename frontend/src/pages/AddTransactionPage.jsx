import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../api/transactions";
import { Bars } from "react-loader-spinner";
import { TRANSACTION_TYPES } from "../utils/constants";

const AddTransactionPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ amount: "", type: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate everything
    if (!formData.amount || !formData.amount > 0 || !formData.type || !formData.description) {
      alert("Please fill out all fields correctly.");
      return;
    }
    setLoading(true);
    try {
      await addTransaction({ ...formData, amount_cents: formData.amount * 100 });
    } catch (error) {
      console.error("Error adding transaction:", error);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-3 text-center">Add Transaction</h2>
        
        {loading ? (
          <div className="d-flex justify-content-center">
            <Bars height="80" width="80" color="#4fa94d" visible={true} />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input
                name="amount"
                type="number"
                className="form-control"
                placeholder="Enter amount"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Type</label>
              <select
                name="type"
                className="form-select"
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                {Object.values(TRANSACTION_TYPES).map((type) => (
                  <option key={type} value={type}>
                    {type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                name="description"
                type="text"
                className="form-control"
                placeholder="Enter description"
                onChange={handleChange}
                required
              />
            </div>
            <div className="container d-flex justify-content-center">
              <button type="submit" className="btn btn-primary me-5">
                Add Transaction
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
            </div>
            
          </form>
        )}
      </div>
    </div>
  );
};

export default AddTransactionPage;
