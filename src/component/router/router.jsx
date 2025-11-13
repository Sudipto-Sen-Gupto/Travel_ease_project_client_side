import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homepage from '../../pages/homepage/Homepage';
import Homelayout from '../../layout/Homelayout';
import Allvehicles from '../../pages/Allvehicles/Allvehicles';
import Addvehicles from '../../pages/Addvehicles/Addvehicles';
import Myvehicles from '../../pages/Myvehicles/Myvehicles';
import Mybooks from '../../pages/Mybooks.jsx/Mybooks';

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
                path:'/allvehicles',
                Component:Allvehicles
            },
            {
                path:'/addvehicles',
                element:<Addvehicles></Addvehicles>
            },
            {
                path:'/myvehicles',
                element:<Myvehicles></Myvehicles>
            },
            {
                path:'/mybook',
                element:<Mybooks></Mybooks>
            }
        ]
    }
])