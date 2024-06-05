import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExpensePage = ({ toggleExpenseManager, toggleCategoryManager }) => {
  const [expenses, setExpenses] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '', categoryId: '' });
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    axios.get('/expense/list')
      .then(response => setExpenses(response.data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  const handleAddExpenseClick = () => setShowMenu(!showMenu);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddExpense = () => {
    axios.post('/expense/create', newExpense)
      .then(response => {
        setExpenses([...expenses, response.data]);
        setNewExpense({ name: '', amount: '', categoryId: '' });
      })
      .catch(error => console.error('Error adding expense:', error));
    setShowMenu(false);
  };

  const handleDeleteExpense = (id) => {
    axios.post('/expense/delete', { id })
      .then(() => {
        setExpenses(expenses.filter(expense => expense.id !== id));
      })
      .catch(error => console.error('Error deleting expense:', error));
  };

  const startEditExpense = (expense) => {
    setEditingExpense(expense);
    setShowMenu(true);
  };

  const handleEditExpenseSubmit = () => {
    axios.post('/expense/update', editingExpense)
      .then(response => {
        setExpenses(expenses.map(expense => expense.id === response.data.id ? response.data : expense));
        setEditingExpense(null);
        setShowMenu(false);
      })
      .catch(error => console.error('Error updating expense:', error));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingExpense(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Expense Page</h2>
      {expenses.map(expense => (
        <div key={expense.id}>
          <p>{expense.name}: ${expense.amount}</p>
          <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
          <button onClick={() => startEditExpense(expense)}>Edit</button>
        </div>
      ))}
      <button onClick={handleAddExpenseClick}>Add Expense</button>
      {showMenu && (
        <div>
          {editingExpense ? (
            <div>
              <input
                type="text"
                name="name"
                value={editingExpense.name}
                onChange={handleEditInputChange}
                placeholder="Expense Name"
              />
              <input
                type="number"
                name="amount"
                value={editingExpense.amount}
                onChange={handleEditInputChange}
                placeholder="Expense Amount"
              />
              <input
                type="text"
                name="categoryId"
                value={editingExpense.categoryId}
                onChange={handleEditInputChange}
                placeholder="Category ID"
              />
              <button onClick={handleEditExpenseSubmit}>Save</button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                name="name"
                value={newExpense.name}
                onChange={handleInputChange}
                placeholder="Expense Name"
              />
              <input
                type="number"
                name="amount"
                value={newExpense.amount}
                onChange={handleInputChange}
                placeholder="Expense Amount"
              />
              <input
                type="text"
                name="categoryId"
                value={newExpense.categoryId}
                onChange={handleInputChange}
                placeholder="Category ID"
              />
              <button onClick={handleAddExpense}>Add</button>
            </div>
          )}
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
