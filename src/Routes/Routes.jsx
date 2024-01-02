import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Cosmetics from "../Pages/Home/ProductCategory/Cosmetics";
import Fashion from "../Pages/Home/ProductCategory/Fashion";
import Bags from "../Pages/Home/ProductCategory/Bag";
import Sunglass from "../Pages/Home/ProductCategory/Sunglass";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>
      },
      {
        path: "/cosmetics",
        element: <Cosmetics></Cosmetics>
      },
      {
        path: "/fashion",
        element: <Fashion></Fashion>
      },
      {
        path: "/bag",
        element: <Bags></Bags>
      },
      {
        path: "/sunglasses",
        element: <Sunglass></Sunglass>
      },


    ]
  }


]);
