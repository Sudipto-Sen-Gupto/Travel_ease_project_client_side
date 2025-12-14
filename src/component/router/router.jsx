import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homepage from '../../pages/homepage/Homepage';
import Homelayout from '../../layout/Homelayout';
import Allvehicles from '../../pages/Allvehicles/Allvehicles';
import Addvehicles from '../../pages/Addvehicles/Addvehicles';
import Myvehicles from '../../pages/Myvehicles/Myvehicles';
import Mybooks from '../../pages/Mybooks.jsx/Mybooks';
import Login from '../Login/Login';
import Register from '../register/Register';
import Privateroute from '../privaterouter/Privateroute';
import ViewDetails from '../../pages/viewDetailsPage/ViewDetails';
import VehicleUpdate from '../../pages/updatePage/vehicleUpdate';
import Errorpage from '../../pages/Errorpage/Errorpage';


 export const router = createBrowserRouter([
    {
        path:'/',
        Component:Homelayout,
        children:[
            {
                index:true,
                Component:Homepage
            },
            {
                path:'allvehicles',
                Component:Allvehicles
            },
            {
                path:'addvehicles',
                element: <Privateroute><Addvehicles></Addvehicles></Privateroute>
            },
            {
                path:'myvehicles',
                element: <Privateroute><Myvehicles></Myvehicles></Privateroute>,
               
            },
               {
                     path:'update/:id',
                     element:<Privateroute><VehicleUpdate></VehicleUpdate></Privateroute>
                },
            {
                path:'mybook',
                element: <Privateroute><Mybooks></Mybooks></Privateroute>
            },
            {
                path:'viewdetails/:id',
               
                element:<Privateroute> <ViewDetails></ViewDetails>  </Privateroute>
            },
    {
        path:'login',
        Component:Login
    },
    {
        path:'register',
        Component:Register
    },
           {
            path:'*',
            Component:Errorpage
           }
        ]
    }
])