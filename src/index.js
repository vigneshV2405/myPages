import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { createRoot } from "react-dom/client";
import Home from './features/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashBoard from './features/AdminDashboad/AdminDashboad';
import AddHospital from './features/AdminDashboad/AddHospital';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddBed from './features/AdminDashboad/AddBed';
import HospitalDetails from './features/Hospital/HospitalDetails';
import Discharge from './features/AdminDashboad/Discharge';
import BedDetails from './features/Hospital/BedDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/admindashboard",
        element:<AdminDashBoard></AdminDashBoard>,
        children:[
          {
            path:"/admindashboard/addHospital",
            element:<AddHospital></AddHospital>
          },
          {
            path:"/admindashboard/addBed",
            element:<AddBed></AddBed>
          },
          {
            path:"/admindashboard/discharge",
            element:<Discharge></Discharge>
          },
        ]
      },
      {
        path:"/details/:id",
        element:<HospitalDetails/>
      },
      {
        path:"admindashboard/discharge/details/:id",
        element: <BedDetails></BedDetails>

      },
      {
        path:"",
        element:<Home></Home>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();