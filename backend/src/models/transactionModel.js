export const createTransaction = (data) => ({
    id: data.id,
    amount: data.amount,
    type: data.type,
    description: data.description || null,
    accountNumber: data.account_number,
    createdAt: new Date(data.created_at),
    updatedAt: new Date(data.updated_at),
  });  


// NOT USING THIS AS ... IDK, RUNNING OUT OF TIME