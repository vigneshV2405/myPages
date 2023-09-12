import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Contact';
import Courses from './courses';
import Countries from './Countries';
import Countrydetails from './Countrydetails';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children : [
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path:'/courses',
        element:<Courses></Courses>
      },
      {
        path:'/countries',
        element:<Countries></Countries>,
        children:[
          {
            path:'countrydetails/:cname',
            element:<Countrydetails></Countrydetails>
          }
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
