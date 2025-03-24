import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import TransactionTable from "../components/TransactionTable";
import { fetchTransactions } from "../api/transactions";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    setLoading(true);
    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (error) {
        console.error("Error loading transactions:", error);
    }
    finally {
        setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchId.trim()) return alert("Please enter a transaction ID.");
    window.location.href = `/transaction/${searchId}`;
  };

  return (
    <div className="container mt-4">
      <h1>Transaction Manager</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Transactions</h2>
        <div>
          <Link to="/add" className="btn btn-primary me-2">Add Transaction</Link>
          <button className="btn btn-secondary" onClick={loadTransactions}>Refresh</button>
        </div>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control d-inline w-25 me-2"
          placeholder="Search Transaction ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button className="btn btn-info" onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Bars height="80" width="80" color="#4fa94d" ariaLabel="bars-loading" visible={true} />
        </div>
      ) : (
        <TransactionTable transactions={transactions} />
      )}
    </div>
  );
};

export default TransactionsPage;
