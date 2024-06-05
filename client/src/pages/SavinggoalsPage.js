import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import editGoalsIcon from '../assets/icon_pig.png';
import expenseBackground from '../assets/background.png'; // Correct path for the background image
import dashboardButton from '../assets/dashboardButton.png'; // Path for the dashboard button

const SavinggoalsPage = ({ toggleExpenseManager, toggleCategoryManager }) => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '', categoryId: '' });
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    axios.get('/expense/list')
      .then(response => setExpenses(response.data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  useEffect(() => {
    axios.get('/category/list')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
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
    const parsedNewExpense = {
      name: newExpense.name,
      amount: parseInt(newExpense.amount),
      categoryId: newExpense.categoryId,
    }

    console.log('Adding new expense:', parsedNewExpense);
    axios.post('/expense/create', parsedNewExpense)
      .then(response => {
        setExpenses([...expenses, response.data]);
        setNewExpense({ name: '', amount: '', categoryId: '' });
      })
      .catch(error => {
        console.error('Error adding expense:', error);
        if (error.response) {
          console.error('Validation errors:', error.response.data.validationError);
        }
      });
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
    <div style={{ 
      backgroundImage: `url(${expenseBackground})`, 
      backgroundSize: 'cover', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2>Saving Goals</h2>
      {expenses.map(expense => (
        <div key={expense.id}>
          <p>{expense.name}: ${expense.amount}</p>
          <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
          <button onClick={() => startEditExpense(expense)}>Edit</button>
        </div>
      ))}

      <a href="#" onClick={handleAddExpenseClick} style={{ marginTop: '1rem' }}>
        <img src={editGoalsIcon} alt="Edit Goals" />
      </a>

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
              <select name="categoryId"
                value={newExpense.categoryId}
                onChange={handleInputChange}>
                <option value="5bfdeac841bcd51cbb28a817139d33b2">Prvni</option>
                <option value="cebc6e4de7fcb2cde2bda6b097131cd9">Druha</option>
              </select>
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
              <select name="categoryId"
                value={newExpense.categoryId}
                onChange={handleInputChange}>
                {categories.map(category => (
                  <option key={category.id}
                    value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button onClick={handleAddExpense}>Add</button>
            </div>
          )}
        </div>
      )}

      <a href="/">
        <img src={dashboardButton} alt="Go to Dashboard" style={{ marginTop: '1rem' }} />
      </a>
    </div>
  );
};

export default SavinggoalsPage;
