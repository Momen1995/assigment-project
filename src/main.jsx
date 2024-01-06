import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from './Context/GLobalProvider.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element:<Home></Home>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
