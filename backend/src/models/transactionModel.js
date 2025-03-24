export default class Transaction {
    /**
     * @param {number} id - Transaction ID
     * @param {number} amount - Amount in cents
     * @param {string} type - 'credit' or 'debit'
     * @param {string|null} description - Optional transaction description
     * @param {string} accountNumber - Associated account number (for future use)
     * @param {Date} createdAt - Timestamp of creation
     * @param {Date} updatedAt - Timestamp of last update
     */
    constructor(id, amount, type, description, accountNumber, createdAt, updatedAt) {
      this.id = id;
      this.amount = amount;
      this.type = type;
      this.description = description || null;
      this.accountNumber = accountNumber;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  


// NOT USING THIS AS ... IDK, NODE JUST DOESNT NEED MODELS I GUESS?