import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage/>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/serviceDetails/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://car-doctor-server-emon83.vercel.app/serviceDetails/${params.id}`)
        },
        {
            path: '/checkout/:id',
            element:<Checkout></Checkout>,
            loader: ({params}) => fetch(`https://car-doctor-server-emon83.vercel.app/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
        {
            path: '/login',
            element:<Login></Login>,
        },
        {
            path: '/signUp',
            element:<SignUp></SignUp>,
        },
      ]
    },
  ]);


export default router;