import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
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
import AuthContextProvider from './Utilities/AuthContextProvider';
import PrivateRoute from './Components/Routes/PrivateRoute';
import Details from './Components/Details/Details';
import Update from './Components/Update/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main> ,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://b9a10-server-side-sayem-taher.vercel.app/addTourists')
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
        element:<PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path:'/allSpot',
        element:<AllSpots></AllSpots>,
        loader:()=>fetch('https://b9a10-server-side-sayem-taher.vercel.app/addTourists')
      },
      {
        path:'/addTourists',
        element:<PrivateRoute><AddTourists></AddTourists></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://b9a10-server-side-sayem-taher.vercel.app/addTourists/${params.id}`)

      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params}) => fetch(`https://b9a10-server-side-sayem-taher.vercel.app/addTourists/${params.id}`)
      }




    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
