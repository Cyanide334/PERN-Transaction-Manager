import React from "react";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/utils";

const TransactionTable = ({ transactions }) => {
  return (
    // if no transactions, display a message
    !transactions.length ? <p className="text-center text-muted">No transactions found.</p> :
    // else, display the transactions in a table
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx.id}>
            <td>{tx.id}</td>
            <td>${tx.amount_cents / 100}</td>
            <td>{tx.type.toUpperCase()}</td>
            <td>{tx.description}</td>
            <td>{formatTimestamp(tx.created_at)}</td>
            <td>{formatTimestamp(tx.updated_at)}</td>
            <td>
              <Link to={`/edit/${tx.id}`} className="btn btn-warning btn-sm">Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
