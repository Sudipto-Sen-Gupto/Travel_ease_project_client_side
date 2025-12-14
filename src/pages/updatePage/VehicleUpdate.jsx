import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseSecureAxios from '../../customhook/UseSecureAxios';
import Swal from 'sweetalert2';
import update from '../../assets/homepage_pic/updatepicture.avif';

const VehicleUpdate = () => {
  const { id } = useParams(); // vehicle id
  const axiosSecureInstance = UseSecureAxios();
  const [vehicle, setVehicle] = useState({});

  // 🔹 fetch existing vehicle
  useEffect(() => {
    axiosSecureInstance.get(`/addvehicle/${id}`)
      .then(res => setVehicle(res.data))
      .catch(err => console.log(err));
  }, [id, axiosSecureInstance]);

  // 🔹 update handler
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedVehicle = {
      vehicleName: e.target.vehicleName.value,
      ownerName: e.target.ownerName.value,
      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      availability: e.target.availability.value,
      description: e.target.description.value,
    };

    axiosSecureInstance.patch(`/addvehicle/${id}`, updatedVehicle)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Vehicle Updated Successfully',
            timer: 1500,
            showConfirmButton: false
          });
        }
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${update})` }}
    >
      <div className="w-full max-w-md bg-white/90 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Vehicle
        </h2>

        <form onSubmit={handleUpdate} className="space-y-3">

          <input
            name="vehicleName"
            defaultValue={vehicle.vehicleName}
            className="input input-bordered w-full"
            placeholder="Vehicle Name"
          />

          <input
            name="ownerName"
            defaultValue={vehicle.ownerName}
            className="input input-bordered w-full"
            placeholder="Owner Name"
          />

          <input
            name="category"
            defaultValue={vehicle.category}
            className="input input-bordered w-full"
            placeholder="Category"
          />

          <input
            name="price"
            defaultValue={vehicle.price}
            className="input input-bordered w-full"
            placeholder="Price"
          />

          <input
            name="location"
            defaultValue={vehicle.location}
            className="input input-bordered w-full"
            placeholder="Location"
          />

          <input
            name="availability"
            defaultValue={vehicle.availability}
            className="input input-bordered w-full"
            placeholder="Availability"
          />

          <textarea
            name="description"
            defaultValue={vehicle.description}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          />

          <button className="btn btn-neutral w-full">
            Update Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default VehicleUpdate;
