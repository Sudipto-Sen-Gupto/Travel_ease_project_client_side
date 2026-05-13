import React, { use } from 'react';
import { AuthContext } from '../../component/authprovider/Authprovider';
import { useQuery } from '@tanstack/react-query';

import UseSecureAxios from '../../customhook/UseSecureAxios';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
const Mybooks = () => {

    const {user}=use(AuthContext);
    
     const axiosSecureInstance=UseSecureAxios()

    const {data:bookings=[]}=useQuery({
             
           queryKey:['vehiclebook',user.email],
           queryFn:async()=>{
                   const res=await axiosSecureInstance.get(`/vehicleBooking/email?email=${user.email}`)

                  //  console.log(res.data);
                   return res.data;
           }
    })
    const handlePay =async(book)=>{
              

               const customerDetail={
                       vehicleId:book._id,
                       vehicleName:book.vehicleName,
                        cost: Number(book.pricePerDay || book.price),
                       userEmail:book.userEmail
               }

               const res= await axiosSecureInstance.post('/create_payment_session',customerDetail);
                 console.log(res.data);
               
    }
    return (
        <div>
                <h1 className='text-3xl font-bold text-center my-5'>My vehicle booking schedule</h1>
                <p className='text-center text-[22px]'>Total vehicle:{bookings.length}</p>
                   
                  <p className='text-center text-[22px] '> {format(new Date(), 'dd MMM yyyy, hh:mm a')}</p>
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        
        <th>Vehicle Name</th>
        <th>Owner Name</th>
        <th>Cost</th>
        <th>Payment</th>
        <th>Booking Time</th>
      </tr>
    </thead>
    <tbody>
     

      {
        bookings.map((book)=>{
            return  <tr key={book._id}>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={book.coverImage}
                  alt={book.vehicleName} />
              </div>
            </div>
            <div>
              <div className="font-bold">{book.vehicleName}</div>
              <div className="text-sm opacity-50">{book.transmission}</div>
            </div>
          </div>
        </td>
        <td>
         {book.owner}
          <br />
          <span className="badge badge-ghost badge-sm">{book.location}</span>
        </td>
        <td>{book.pricePerDay}</td>
        <td><button className='btn btn-primary' onClick={()=>handlePay(book)}>Pay</button></td>
        <td>
          <button className="btn btn-ghost btn-xs">{book.createdAt}</button>
        </td>
      </tr>
        })
      }
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default Mybooks;