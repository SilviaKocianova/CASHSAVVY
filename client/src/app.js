import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import './NavBar.css';
import DashboardPage from './pages/DashboardPage';
import BudgetPage from './pages/BudgetPage';
import ExpensePage from './pages/ExpensePage';
import SavinggoalsPage from './pages/SavinggoalsPage';
import ErrorPage from './ErrorPage';

const componentStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: "#ffffff",
};

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
    element: <ExpensePage />,
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

const App = () => {
  return (
    <RouterProvider router={router}>
      <div style={componentStyle}>
        {/* Your components will be rendered based on the current route */}
      </div>
    </RouterProvider>
  );
};

export default App;
