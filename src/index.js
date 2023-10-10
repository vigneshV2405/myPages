import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './features/Login';
import Myfeed from './features/Myfeed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'',
        element:<Login></Login>
      },
      {
        path:'/myfeed/:id',
        element:<Myfeed></Myfeed>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();