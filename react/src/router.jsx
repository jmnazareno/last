import { createBrowserRouter, Navigate } from "react-router-dom";
import DonorLayout from "./Pages/Donor/DonorLayout";
import DonorHomepage from "./Pages/Donor/DonorHomepage";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import GuestLayout from "./Pages/Homepage/GuestLayout";
import NewLayout from "./Pages/NewHomepage/NewLayout";
import Donor from "./Pages/NewHomepage/Donor";
import Guest from "./Pages/NewHomepage/Guest";
import Admin from "./Pages/NewHomepage/Admin";


const router = createBrowserRouter([
    {
      path: "/",
      element: <GuestLayout />,
      children: [
        {
          path: '/',
          element: <Guest />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
      ]
    },

    {
        path: "/",
        element: <DonorLayout />,
        children: [
          {
            path: "/DonorHomepage",
            element: <Donor />,
          },
          {
            path: "/AdminHomepage",
            element: <Admin />,
          },
          
        ],
      }, 



]);


export default router;