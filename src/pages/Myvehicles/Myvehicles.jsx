import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../../component/authprovider/Authprovider';
import Useaxios from '../../customhook/Useaxios';
import Swal from 'sweetalert2';


const Myvehicles = () => {
           
       const {user}=use(AuthContext);

       const axiosInstance=Useaxios();

       const {data:myVehicles=[],refetch}=useQuery({
                 queryKey:['myVehicle',user.email],
                 queryFn:async()=>{
                         const res=await axiosInstance.get(`/addvehicle/email?email=${user.email}`);
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

    axiosInstance.delete(`/removevehicle/${id}`).then(()=>{
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
    return (
        <div>
           <h1>  all data={myVehicles.length}</h1>

             <div className="overflow-x-auto">
  <table className="  md: table table-zebra ">
    {/* head */}
    <thead>
      <tr>
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
              
         return   <tr>
        <th>{index+1}</th>
        <td>{myvehicle.vehicleName}</td>
        <td>{myvehicle.location}</td>
        <td>{myvehicle.availability}</td>
        <td>{myvehicle.price}</td>
        <td>
            <button className='btn btn-primary'>View Details</button>
            <button className='btn btn-primary mx-2'>Update</button>
            <button className='btn btn-primary' onClick={()=>handleDelete(myvehicle._id)}>Delete</button>
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

export default Myvehicles;