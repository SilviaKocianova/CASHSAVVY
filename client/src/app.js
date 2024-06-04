import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './NavBar.css';
import DashboardPage from './pages/DashboardPage';
import BudgetPage from './pages/BudgetPage';
import ExpensePage from './pages/ExpensePage';
import SavinggoalsPage from './pages/SavinggoalsPage';
import ErrorPage from './ErrorPage';
import ExpenseManager from './components/ExpenseManager';
import CategoryManager from './components/CategoryManager';

const componentStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: "#ffffff",
};

const App = () => {
  const [showExpenseManager, setShowExpenseManager] = useState(false);
  const [showCategoryManager, setShowCategoryManager] = useState(false);

  const toggleExpenseManager = () => setShowExpenseManager(!showExpenseManager);
  const toggleCategoryManager = () => setShowCategoryManager(!showCategoryManager);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "Expense",
      element: (
        <ExpensePage 
          toggleExpenseManager={toggleExpenseManager} 
          toggleCategoryManager={toggleCategoryManager} 
        />
      ),
    },
    {
      path: "Budget",
      element: <BudgetPage />,
    },
    {
      path: "Savinggoals",
      element: <SavinggoalsPage />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div style={componentStyle}>
        <h1>SAVVY</h1>
        {showExpenseManager && <ExpenseManager />}
        {showCategoryManager && <CategoryManager />}
      </div>
    </RouterProvider>
  );
};

export default App;
