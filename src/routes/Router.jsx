import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Authentication from "../layout/Authentication";
import Login from "../pages/Authentication/Login";

export const router = createBrowserRouter([
    // General Layout
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order',
                element: <Order />
            },
        ]
    },
    // Authentication Layout
    {
        path: '/authentication',
        element: <Authentication />,
        children: [
            {
                path: '/authentication/login',
                element: <Login />
            },
        ]
    },
]);