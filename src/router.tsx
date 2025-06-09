import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/login" replace />
            }, {
                path: 'login',
                element: <Login />
            }, {
                path: 'register',
                element: <Register />
            }
        ]
    }
])