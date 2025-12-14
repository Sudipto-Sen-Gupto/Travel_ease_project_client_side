import { useQuery } from '@tanstack/react-query';
import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../../component/authprovider/Authprovider';

import Swal from 'sweetalert2';
import { Link } from 'react-router';
import UseSecureAxios from '../../customhook/UseSecureAxios';


const Myvehicles = () => {
           
       const {user}=use(AuthContext);

       
       const axiosSecureInstance=UseSecureAxios();

       const {data:myVehicles=[],refetch}=useQuery({
                 queryKey:['myVehicle',user.email],
                 queryFn:async()=>{
                         const res=await axiosSecureInstance.get(`/addvehicle/email?email=${user.email}`);
                            console.log(res.data);
                         return res.data
                 } 
       })

       const handleDelete=(id)=>{
         
               Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

   axiosSecureInstance.delete(`/removevehicle/${id}`).then(()=>{
              refetch();    
        Swal.fire({
      title: "Deleted!",
      text: "Your vehicle data has been deleted.",
      icon: "success"
    });
    }).catch(err=>console.log(err.message));
    
  }
});
       }

          
      const viewModal=useRef()
      const [viewVehicle,setViewVehicle]=useState(null);

       const handleView=(vehicle)=>{
             setViewVehicle(vehicle)
               viewModal.current.showModal();
       }
    return (
        <div>
           <h1 className='text-center text-3xl text-bold my-5'> My vehicle:{myVehicles.length}</h1>

             <div className="overflow-x-auto">
  <table className="  md: table table-zebra text-[20px] ">
    {/* head */}
    <thead>
      <tr className='text-[20px]'>
        <th>#</th>
        <th>Vehicle Name</th>
        <th>Location</th>
        <th>Availability</th>
        <th>Cost</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myVehicles.map((myvehicle,index)=>{
              
         return    <tr key={myvehicle._id}>
        <th>{index+1}</th>
        <td>{myvehicle.vehicleName}</td>
        <td>{myvehicle.location}</td>
        <td  className={` ${
    myvehicle.availability?.toLowerCase() === 'available'
      ? 'text-green-600'
      : 'text-red-600'
  }`}>{myvehicle.availability}</td>
        <td>{myvehicle.price}</td>
        <td>
            <button className='btn btn-primary' onClick={()=>handleView(myvehicle)}  >View Details</button>
            <Link  className='btn btn-primary mx-2' to={`/update/${myvehicle._id}`} >Update</Link>
            <button className='btn btn-primary' onClick={()=>handleDelete(myvehicle._id)}>Delete</button>
        </td>
      </tr>

    

         
        })
      }
      
     
      
    </tbody>
  </table>
</div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}

        <dialog ref={viewModal} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
            {
                viewVehicle && <>
                  <div className="max-w-xl mx-auto p-6">
  <div className="card bg-base-100 shadow-xl border rounded-2xl">
    
    <div className="card-body space-y-3">
      <h2 className="card-title text-3xl font-bold text-primary">
        {viewVehicle.vehicleName}
      </h2>

      <div className="space-y-1 text-lg">
        <p><span className="font-semibold">Owner:</span> {viewVehicle.ownerName}</p>
        <p><span className="font-semibold">Location:</span> {viewVehicle.location}</p>
        <p><span className="font-semibold">Price:</span> ${viewVehicle.price}</p>
        <p><span className="font-semibold">Category:</span> {viewVehicle.category}</p>
        <p><span className="font-semibold">Email:</span> {viewVehicle.email}</p>
      </div>

      <div className="divider"></div>

      <p className="text-base leading-relaxed">
        {viewVehicle.description}
      </p>

      
    </div>
  </div>
                  </div>

                </>
            }
      

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </div>
    );
};

export default Myvehicles;