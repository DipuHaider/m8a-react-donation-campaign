import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/Home/Home';
import Donations from './components/Donations/Donations';
import Statistics from './components/Statistics/Statistics';
import DonationDetail from './components/DonationDetail/DonationDetail';
import MainLayout from './components/MainLayout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/:id',
        element: <DonationDetail></DonationDetail>,
        loader: () => fetch(`../donations.json`),
        
      },
      {
        path: '/donations',
        element: <Donations></Donations>,
        loader: () => fetch(`../donations.json`),
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
