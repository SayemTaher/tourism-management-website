import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error/Error';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyList from './Components/My List/MyList';
import AllSpots from './Components/All Tourists/AllSpots';
import AddTourists from './Components/Add Tourists Spot/AddTourists';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main> ,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/myList',
        element:<MyList></MyList>
      },
      {
        path:'/allSpot',
        element:<AllSpots></AllSpots>
      },
      {
        path:'/addTourists',
        element:<AddTourists></AddTourists>
      }
      


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
