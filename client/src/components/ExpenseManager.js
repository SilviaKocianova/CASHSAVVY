import React, { useState } from 'react';

function ExpenseManager() {
  const [expenses, setExpenses] = useState([1000, 2000, 50, 10]);
  const [newExpense, setNewExpense] = useState('');

  const addExpense = () => {
    setExpenses([...expenses, parseInt(newExpense)]);
    setNewExpense('');
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const updateExpense = (index, value) => {
    const updatedExpenses = expenses.map((expense, i) => (i === index ? value : expense));
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <input 
        type="number" 
        value={newExpense} 
        onChange={(e) => setNewExpense(e.target.value)} 
      />
      <button onClick={addExpense}>Add</button>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense}
            <button onClick={() => deleteExpense(index)}>Delete</button>
            <button onClick={() => updateExpense(index, parseInt(prompt("New value:", expense)))}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseManager;

