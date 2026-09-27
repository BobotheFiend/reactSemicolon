
import { createBrowserRouter } from "react-router";
import Books from "../components/Books";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Books/>
    },

])

export default router