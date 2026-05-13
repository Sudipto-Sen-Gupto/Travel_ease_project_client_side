import axios from 'axios';
import React from 'react';

const axiosInstance= axios.create({
         
        baseURL: 'https://travel-ease-project-server.vercel.app',
    //    baseURL: 'http://localhost:3000/',
      
})

const Useaxios = () => {
    return axiosInstance;
};

export default Useaxios;