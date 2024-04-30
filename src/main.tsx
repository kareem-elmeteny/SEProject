import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import AdminHome from './admin/Home.tsx'
import DonorHome from './donor/Home.tsx'
import RepresentativeHome from './representative/Home.tsx'
import AppLayout from "./AppLayout.tsx";
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
            {path: '/', element: <App/>},
            {path: '/admin', element: <AdminHome/>},
            {path: '/donor', element: <DonorHome/>},
            {path: '/representative', element: <RepresentativeHome/>},
        ]
    },

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>,
)
