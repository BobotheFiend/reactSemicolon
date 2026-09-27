import { createBrowserRouter } from "react-router";
import Login from "../components/auth/login/Login";
import SignUp from "../components/auth/signup/SignUp";
import Products from "../components/products/Products";
import ProductDetails from "../components/products/ProductDetail";
// import ShoppingCart from "../components/cart/ShoppingCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/products",
        element: <Products/>
    },
    
    {
        path: "/products/:id",
        element: <ProductDetails />,
    },
    // {
    //     path: "/carts",
    //     element: <ShoppingCart/>,
    // },
])

export default router