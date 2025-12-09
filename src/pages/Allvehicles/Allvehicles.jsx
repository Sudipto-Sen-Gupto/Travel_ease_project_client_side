import React from 'react';
import Useaxios from '../../customhook/Useaxios';
import { useQuery } from '@tanstack/react-query';
import Homedatum from '../../component/homeData/Homedatum';

const Allvehicles = () => {

    const axiosInstance=Useaxios();

    const {data:property=[]}=useQuery({
        queryKey: ['property'],
        queryFn:async()=>{
            const res=await axiosInstance.get('/allProperty')
            return res.data;
        }
    })
    return (
        <div>
              <div className='text-center my-5 p-4'>
                <h1 className='text-3xl font-bold '>Our Vehicle Services</h1>
                 <p className='text-[18px]'>Make your journey with comfort and secure.</p>
            </div >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-4'>
              {
                property.map(prop=><Homedatum key={prop.key} prop={prop}></Homedatum>)
              }
          </div>
        </div>
    );
};

export default Allvehicles;