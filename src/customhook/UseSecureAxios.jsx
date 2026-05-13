import axios from 'axios';
import  { use, useEffect } from 'react';
import { AuthContext } from '../component/authprovider/Authprovider';
 
  const instance=axios.create({
       baseURL:'https://travel-ease-project-server.vercel.app'
      // baseURL:'http://localhost:3000/'
     
  })

const UseSecureAxios = () => {
     const {user}=use(AuthContext)
    
      useEffect(()=>{
         const myInterceptor=  instance.interceptors.request.use(function(config){
        config.headers.Authorization=`Bearer ${user.accessToken}`
        // console.log(config);
        return config;
    })
               return ()=>{
                 instance.interceptors.request.eject(myInterceptor)
               }
        
      },[user])

    return instance;
};

export default UseSecureAxios;