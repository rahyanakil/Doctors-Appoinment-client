import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Checkouts from "../Pages/Checkouts/Checkouts";
import PrivatesRoute from "./PrivatesRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'Signup',
          element:<SignUp></SignUp>
        },
        {
          path:'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
        ,{
          path:'checkouts',
          element:<PrivatesRoute><Checkouts></Checkouts></PrivatesRoute>
        }
      ]
    },
  ]);

  export default router;