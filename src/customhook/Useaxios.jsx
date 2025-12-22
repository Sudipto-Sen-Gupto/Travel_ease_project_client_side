import axios from 'axios';
import React from 'react';

const axiosInstance= axios.create({
         
       baseURL: 'https://travel-ease-server-project.vercel.app/',
})

const Useaxios = () => {
    return axiosInstance;
};

export default Useaxios;