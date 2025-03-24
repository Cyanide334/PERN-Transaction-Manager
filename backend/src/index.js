import express from "express";
import cors from "cors";
import transactionRoutes from "./routes/transactionRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Transaction API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});