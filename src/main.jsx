import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import ProductPages from './routes/ProductPages.jsx';
import Checkout from './routes/Checkout.jsx';
import Authentication from './routes/Authentication.jsx';
import OrderConfirmation from './routes/OrderConfirmation.jsx';


const router = createBrowserRouter([
  {
    path: '/CorgiSHOP',
    element: <App />,
  },
  {
    path: '/CorgiSHOP/productpages',
    element: <ProductPages />
  },
  {
    path: '/CorgiSHOP/checkout',
    element: <Checkout />
  },
  {
    path: '/CorgiSHOP/authentication',
    element: <Authentication />
  },
  {
    path: '/CorgiSHOP/orderdetails',
    element: <OrderConfirmation />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
