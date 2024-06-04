import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExpensePage = ({ toggleExpenseManager, toggleCategoryManager }) => {
  const [expenses, setExpenses] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    axios.get('/expense')  // this will be proxied to http://localhost:3000/expense
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the expenses!', error);
      });
  }, []);

  const handleAddExpenseClick = () => {
    setShowMenu(!showMenu);
  };

  const handleAddExpense = (amount) => {
    // Implement the logic to add an expense
    console.log(`Adding expense: ${amount}`);
    // After adding the expense, hide the menu
    setShowMenu(false);
  };

  const handleEditExpense = (id, newAmount) => {
    // Implement the logic to edit an existing expense
    console.log(`Editing expense ${id} with new amount: ${newAmount}`);
    // After editing the expense, hide the menu
    setShowMenu(false);
  };

  const handleDeleteExpense = (id) => {
    // Implement the logic to delete an expense
    console.log(`Deleting expense: ${id}`);
    // After deleting the expense, hide the menu
    setShowMenu(false);
  };

  return (
    <div>
      <h2>Expense Page</h2>
      {/* render expenses */}
      {expenses.map(expense => (
        <div key={expense.id}>
          <p>{expense.name}: ${expense.amount}</p>
        </div>
      ))}
      <button onClick={handleAddExpenseClick}>Add Expense</button>
      {showMenu && (
        <div>
          <p onClick={() => handleAddExpense(1000)}>1000</p>
          <p onClick={() => handleAddExpense(2000)}>2000</p>
          <p onClick={() => handleAddExpense(50)}>50</p>
          <p onClick={() => handleAddExpense(10)}>10</p>
          <p onClick={() => handleEditExpense(1, 500)}>Edit 1</p> {/* Example for editing */}
          <p onClick={() => handleDeleteExpense(1)}>Delete 1</p> {/* Example for deleting */}
        </div>
      )}

      <button onClick={toggleCategoryManager}>Manage Categories</button>
      <Link to="/Expense">Go to Expense Page</Link>
      <Link to="/Budget">Go to Budget Page</Link>
      <Link to="/Savinggoals">Go to Saving Goals Page</Link>
    </div>
  );
};

export default ExpensePage;
