import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { useParams } from 'react-router';

import Swal from 'sweetalert2';
import { AuthContext } from '../../component/authprovider/Authprovider';
import UseSecureAxios from '../../customhook/UseSecureAxios';

const ViewDetails = () => {
     
     const axiosSecureInstance=UseSecureAxios();
    const {id}=useParams();
    const {user}=use(AuthContext)
    // console.log(id);
    const {data:vehicle={}}=useQuery({
        queryKey:['viewdetail',id,user.email],
        queryFn:async()=>{
            const res=await axiosSecureInstance.get(`/viewdetail/${id}`)
            console.log(res.data);
            return res.data;
        }
    })

    const handleClick=()=>{
                        
                  const vehicleDetail={
                         userEmail:user.email,
                         coverImage:vehicle.coverImage,
                         vehicleId:vehicle._id,
                         image:vehicle.coverImage,        
                       vehicleName:vehicle.vehicleName,
                       ownerName:vehicle.ownerName,
                       category:vehicle.category,
                       rating:vehicle.rating,
                       pricePerDay:vehicle.pricePerDay,
                       owner:vehicle.owner,
                       transmission:vehicle.transmission,
                       seats:vehicle.seats,
                       availability:vehicle.availability,
                       location:vehicle.location,
                       description:vehicle.description,
                       createdAt:new Date().toLocaleString()
                  }

                 axiosSecureInstance.post('/vehicleDetail',vehicleDetail).then(res=>{
                          console.log(res.data);

                          if(res.data.exist){
                            Swal.fire({
                                       icon: "error",
                                       title: "Oops...",
                                       text: "Vehicle is already booked",
                                      timer:1500
                                       });

                                       return;
                          }
                          if(res.data.insertedId){
                             Swal.fire({
                              title: "Vehicle booking is completed!",
                                 icon: "success",
                                  draggable: true,
                                  timer:1500
                                       });
                          }
                  })
    }
    return (
        <div className='p-6'>

            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 my-10 "> 
       {/* image section */}
      <div className="w-full  overflow-hidden rounded-lg">
        <img
          src={vehicle.coverImage}
         
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        {/* Title & Basic Info */}
      <div className="mt-5">
        <h1 className="text-3xl font-bold">{vehicle.vehicleName}</h1>
        <p className="text-gray-500 text-sm mt-1">{vehicle.category} • {vehicle.location}</p>

        {/* Rating */}
        <div className="flex items-center mt-2 gap-2">
          <span className="text-yellow-500 text-xl">⭐</span>
          <span className="text-lg font-semibold">{vehicle.rating}</span>
        </div>
      </div>

      {/* Price & Owner */}
      <div className="flex justify-between items-center mt-5 border-b pb-4">
        <div>
          <p className="text-gray-600 text-sm">Price per day</p>
          <p className="text-2xl font-bold text-blue-600">${vehicle.pricePerDay}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Owned by</p>
          <p className="font-semibold">{vehicle.owner}</p>
        </div>
      </div>

      {/* Features Table */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <div className="p-3 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-sm">Transmission</p>
          <p className="font-semibold">{vehicle.transmission}</p>
        </div>

        <div className="p-3 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-sm">Seats</p>
          <p className="font-semibold">{vehicle.seats} Seats</p>
        </div>

        <div className="p-3 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-sm">Availability</p>
          <p className={`font-semibold ${vehicle.availability === "Available" ? "text-green-600" : "text-red-600"}`}>
            {vehicle.availability}
          </p>
        </div>

        <div className="p-3 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-sm">Vehicle ID</p>
          <p className="font-semibold">{vehicle.id}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Vehicle Description</h2>
        <p className="text-gray-600 leading-relaxed text-justify">{vehicle.description}</p>
      </div>

      {/* Book Button */}
      <div className="text-center mt-8">
        <button className="btn btn-primary px-10 py-3 text-lg rounded-lg" onClick={handleClick}>
          🚗 Book Now
        </button>
      </div>
      </div>


    </div>
           
        </div>
    );
};

export default ViewDetails;