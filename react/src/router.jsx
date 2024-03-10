import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import GuestLayout from "./Pages/Homepage/GuestLayout";
import NewLayout from "./Pages/NewHomepage/NewLayout";
import Donor from "./Pages/NewHomepage/Donor";
import Guest from "./Pages/NewHomepage/Guest";
import Admin from "./Pages/NewHomepage/Admin";
import { useStateContext } from "./Context/ContextProvider";
import DonorLayout from "./Pages/Donor/DonorLayout";

// Define role constants
const RoleRouteGuard = ({ allowedRoles, children }) => {
  const { currentUser } = useStateContext();

  if (!allowedRoles.includes(currentUser.role)) {
    // Redirect to unauthorized route if the user's role is not allowed
    return <Navigate to="/AdminHomepage" />;
  }

  return children;
};


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
        element: <DonorLayout/>,
        children: [
          {
            path: "/DonorHomepage",
            element:
            <RoleRouteGuard allowedRoles={[2]}>
            <Donor />
          </RoleRouteGuard>
          },
          {
            path: "/AdminHomepage",
            element:          
           <RoleRouteGuard allowedRoles={[1]}>
            <Admin />
          </RoleRouteGuard>
          },
          
        ],
      }, 



]);


export default router;