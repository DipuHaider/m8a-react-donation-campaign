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
        // loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Home></Home>,
      },
      {
        path: '/:id',
        loader: () => fetch(`../donations.json`),
        // loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.donationId}`),
        element: <DonationDetail></DonationDetail>
      },
      {
        path: '/donations',
        // loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Donations></Donations>,
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
