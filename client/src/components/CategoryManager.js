import React, { useState } from 'react';

function CategoryManager() {
  const [categories, setCategories] = useState(['Dog', 'Cat', 'Transport', 'Food']);
  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory('');
  };

  const deleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const updateCategory = (index, value) => {
    const updatedCategories = categories.map((category, i) => (i === index ? value : category));
    setCategories(updatedCategories);
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <input 
        type="text" 
        value={newCategory} 
        onChange={(e) => setNewCategory(e.target.value)} 
      />
      <button onClick={addCategory}>Add</button>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            <button onClick={() => deleteCategory(index)}>Delete</button>
            <button onClick={() => updateCategory(index, prompt("New value:", category))}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryManager;
