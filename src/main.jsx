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
  path: '/productpages',
  element: <ProductPages/>
 },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
