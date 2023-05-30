import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import 
{ createBrowserRouter, 
  RouterProvider } 
  from 'react-router-dom'

import ProductPages from './routes/ProductPages.jsx';

const router = createBrowserRouter([
 {
  path: '/CorgiSHOP',
  element: <App/>
 },

 {
  path: '/CorgiSHOP/productpages',
  element: <ProductPages/>
 },

])

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ThemeProvider>
          <RouterProvider router={router} />
       </ThemeProvider>
  </React.StrictMode>,
)
