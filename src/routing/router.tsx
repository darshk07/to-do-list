import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/home";

const router: any = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;
