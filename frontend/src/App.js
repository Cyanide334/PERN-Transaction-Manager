import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionsPage from "./pages/TransactionsPage";
import AddTransactionPage from "./pages/AddTransactionPage";
import EditTransactionPage from "./pages/EditTransactionPage";
import ViewTransactionPage from "./pages/ViewTransactionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionsPage />} />
        <Route path="/add" element={<AddTransactionPage />} />
        <Route path="/edit/:id" element={<EditTransactionPage />} />
        <Route path="/transaction/:id" element={<ViewTransactionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
