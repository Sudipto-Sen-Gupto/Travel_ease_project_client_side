import React, { use } from 'react';
import { AuthContext } from '../authprovider/Authprovider';
import { Link, Navigate, useLocation } from 'react-router';
import Loadingpage from '../../pages/loadingPage/Loadingpage';

const Privateroute = ({children}) => {
    const {user,loader}=use(AuthContext)
    const location=useLocation();
    // console.log(location);
       
    if(loader){
      return <Loadingpage></Loadingpage>
    }
   if(!user ){
    return <Navigate state={location.pathname} to={'/login'} ></Navigate>
   }
     return children;
};

export default Privateroute;