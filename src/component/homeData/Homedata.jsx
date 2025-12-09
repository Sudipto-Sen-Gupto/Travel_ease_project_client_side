import React from 'react';
import Useaxios from '../../customhook/Useaxios';
import { useQuery } from '@tanstack/react-query';
import Homedatum from './Homedatum';
import { Link } from 'react-router';

const Homedata = () => {

     const axiosInstance=Useaxios();

     const {data:property=[]}=useQuery({
        queryKey:['property'],
        queryFn:async()=>{
            const res=await axiosInstance.get('/properties')
            return res.data;
        }
     })
    return (
       <div className='my-10 '>
         <div className='bg-gray-100 '>
            
            <div className='text-center my-5 p-4'>
                <h1 className='text-3xl font-bold '>Our Vehicle Services</h1>
                 <p className='text-[18px]'>Make your journey with comfort and secure.</p>
            </div>

          <div className='grid gap-10 p-5 grid-cols-1 md:grid-cols-3'>
            {
                property.map(prop=><Homedatum key={prop._id} prop={prop}></Homedatum>)
            }
          </div>
          
        </div>
                <div className='flex justify-center'> <Link to={'/allvehicles'} className='btn btn-primary  '>Show all</Link></div>
       </div>
    );
};

export default Homedata;