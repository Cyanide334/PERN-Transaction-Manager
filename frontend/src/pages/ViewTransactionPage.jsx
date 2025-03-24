import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTransactionById } from "../api/transactions";
import { Bars } from "react-loader-spinner";
import { formatTimestamp } from "../utils/utils";

const ViewTransactionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTransaction = async () => {
      setLoading(true);
      const tx = await fetchTransactionById(id);
      if (!tx) {
        alert("Transaction not found!");
        navigate("/");
        return;
      }
      setTransaction(tx);
      setLoading(false);
    };
    loadTransaction();
  }, [id, navigate]);

  return (
    <div className="container mt-4">
      <h2>View Transaction</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Bars height="80" width="80" color="#4fa94d" visible={true} />
        </div>
      ) : transaction ? (
        <div className="card p-3">
          <p><strong>ID:</strong> {transaction.id}</p>
          <p><strong>Amount:</strong> {transaction.amount_cents / 100}</p>
          <p><strong>Type:</strong> {transaction.type.toUpperCase()}</p>
          <p><strong>Description:</strong> {transaction.description}</p>
          <p><strong>Created At:</strong> {formatTimestamp(transaction.created_at)}</p>
          <p><strong>Updated At:</strong> {formatTimestamp(transaction.updated_at)}</p>
          <button className="btn btn-primary mt-3 mx-5" onClick={() => navigate("/")}>Go Back</button>
        </div>
      ) : (
        <p>No transaction found.</p>
      )}
    </div>
  );
}

export default ViewTransactionPage;
