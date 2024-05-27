

import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage'
import ErrorPage from '../ErrorPage';




export const BudgetPage = () => {

  return (
    <>
    <h1>helo bruh</h1>
    <p>nevim pls at to funguje...</p>
    </>
  );
}





const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage/>, // You can replace this with your actual home component
  },
 
  {
    path: "*", // This will match any route that is not defined above
    element: <ErrorPage />,
  },

  // Add more routes here as needed
]);






export default BudgetPage