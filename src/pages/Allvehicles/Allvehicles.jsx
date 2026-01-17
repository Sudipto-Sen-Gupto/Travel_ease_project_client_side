import React, { useEffect, useState } from 'react';
import Useaxios from '../../customhook/Useaxios';
import { useQuery } from '@tanstack/react-query';
import Homedatum from '../../component/homeData/Homedatum';
import { AuthContext } from '../../component/authprovider/Authprovider';
import Loadingpage from '../loadingPage/Loadingpage';

const Allvehicles = () => {

  const [totalElements,setTotalElements]=useState(0);
 const [page,setPage]=useState(0);
 const [currentPage,setCurrentPage]=useState(0);
    const axiosInstance=Useaxios(AuthContext);
      
     
     let limit=6;   
     
    const {data:property=[],isLoading}=useQuery({
        queryKey: ['allVehicles',currentPage],
        queryFn:async()=>{

        
            const res=await axiosInstance.get(`/allProperty?limit=${limit}&skip=${currentPage*limit}`)
           setTotalElements(res.data.total)
           const totalPage=Math.ceil(res.data.total/limit);
           setPage(totalPage)
            return res.data.result;
        }
    })

    if(isLoading){
      return <Loadingpage></Loadingpage>
    }
    return (
        <div>
              <div className='text-center my-5 p-4'>
                <h1 className='text-3xl font-bold '>Our Vehicle Services</h1>
                 <p className='text-[18px]'>Make your journey with comfort and secure.</p>
            </div >
            <div>
             <h1 className='font-bold text-3xl'> Total Vehicles({totalElements})</h1>
            </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-4'>
              {
                property.map(prop=><Homedatum key={prop._id} prop={prop}></Homedatum>)
              }
          </div>
          <div className='flex justify-center flex-wrap gap-3 p-4'>

            {
              currentPage>0 && <button className='btn btn-primary' onClick={()=>setCurrentPage(currentPage-1)}>Prev</button>
            }
                 {
                  [...Array(page).keys()].map(n=><button className={`btn ${n===currentPage && 'btn-secondary'}`} key={n} onClick={()=>setCurrentPage(n)}>{n+1}</button>)
                 }

                 {
                  currentPage<page-1 && <button className='btn btn-primary' onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
                 }
          </div>
        </div>
    );
};

export default Allvehicles;