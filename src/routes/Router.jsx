import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Authentication from "../layout/Authentication";
import Login from "../pages/Authentication/Login";
import Contacts from "../pages/Contacts/Contacts";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Dashboard/Cart/Cart";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/Admin/AddItems";
import ManageItems from "../pages/Dashboard/Admin/ManageItems";

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
            {
                path: 'contacts',
                element: <PrivateRoute><Contacts /></PrivateRoute>
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
            {
                path: '/authentication/register',
                element: <Register />
            },
        ]
    },
    // Dashboard Layout
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart />
            },
            {
                path: '/dashboard/user-home',
                element: <Register />
            },
            {
                path: '/dashboard/reservation',
                element: <Register />
            },
            {
                path: '/dashboard/payment-history',
                element: <Register />
            },
            {
                path: '/dashboard/add-review',
                element: <Register />
            },
            {
                path: '/dashboard/user-bookings',
                element: <Register />
            },
            // ADMIN
            {
                path: '/dashboard/all-users',
                element: <AdminRoute> <AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/add-items',
                element: <AdminRoute> <AddItems /></AdminRoute>
            },
            {
                path: '/dashboard/manage-items',
                element: <AdminRoute> <ManageItems /></AdminRoute>
            },
        ]
    },
]);