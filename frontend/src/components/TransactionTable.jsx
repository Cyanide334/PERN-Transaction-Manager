import React from "react";
import { Link } from "react-router-dom";
import { formatTimestamp } from "../utils/utils";

const TransactionTable = ({ transactions }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount (Cents)</th>
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
            <td>{tx.amount_cents}</td>
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
