import { useQuery } from '@tanstack/react-query';
import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../component/authprovider/Authprovider';
import UseSecureAxios from '../../customhook/UseSecureAxios';
import { format } from 'date-fns';

const ViewDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecureInstance = UseSecureAxios();

  const modal = useRef();
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  /* -------------------- Fetch Vehicle -------------------- */
  const { data: vehicle = {}, isLoading } = useQuery({
    queryKey: ['viewdetail', id],
    queryFn: async () => {
      const res = await axiosSecureInstance.get(`/viewdetail/${id}`);
      return res.data;
    },
  });

  /* -------------------- Open Modal -------------------- */
  const handleOpenModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    modal.current.showModal();
  };

  /* -------------------- Confirm Booking -------------------- */
  const handleConfirmBooking = async () => {
    if (!selectedVehicle) return;
      modal.current.close();
    const confirm = await Swal.fire({
      title: 'Confirm Booking?',
      text: `Total price per day: $${selectedVehicle.pricePerDay}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, Book Now',
    });

    if (!confirm.isConfirmed) return;

    const bookingData = {
      userEmail: user.email,
      vehicleId: selectedVehicle._id,
      vehicleName: selectedVehicle.vehicleName,
      coverImage: selectedVehicle.coverImage,
      pricePerDay: selectedVehicle.pricePerDay,
      owner: selectedVehicle.owner,
      category: selectedVehicle.category,
      transmission: selectedVehicle.transmission,
      seats: selectedVehicle.seats,
      location: selectedVehicle.location,
      rating: selectedVehicle.rating,
      createdAt: format(new Date(), 'dd MMM yyyy, hh:mm a'),
    };

    try {
      const res = await axiosSecureInstance.post('/vehicleDetail', bookingData);

      if (res.data.exist) {
        Swal.fire({
          icon: 'info',
          title: 'Already Booked',
          text: 'You have already booked this vehicle',
        });
        return;
      }

      if (res.data.insertedId) {
        
        Swal.fire({
          icon: 'success',
          title: 'Booking Confirmed!',
          text: 'Your vehicle has been booked successfully',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Something went wrong',
      });
    }
  };

  if (isLoading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="p-6">

      {/* ================= Vehicle Details Card ================= */}
      <div className="max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg p-6 my-10 border border-base-300">

        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={vehicle.coverImage}
            className="w-full h-[350px] object-cover"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold">{vehicle.vehicleName}</h1>
          <p className="text-sm text-base-content/60 mt-1">
            {vehicle.category} • {vehicle.location}
          </p>

          <div className="flex items-center gap-2 mt-2">
            ⭐ <span className="font-semibold">{vehicle.rating}</span>
          </div>

          <div className="flex justify-between items-center mt-5 border-b pb-4">
            <div>
              <p className="text-sm text-base-content/60">Price per day</p>
              <p className="text-2xl font-bold text-primary">
                ${vehicle.pricePerDay}
              </p>
            </div>
            <div>
              <p className="text-sm text-base-content/60">Owner</p>
              <p className="font-semibold">{vehicle.owner}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
            <Feature label="Transmission" value={vehicle.transmission} />
            <Feature label="Seats" value={`${vehicle.seats} Seats`} />
            <Feature
              label="Availability"
              value={vehicle.availability}
              color={
                vehicle.availability === 'Available'
                  ? 'text-success'
                  : 'text-error'
              }
            />
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Vehicle Description</h2>
            <p className="text-base-content/70 leading-relaxed text-justify">
              {vehicle.description}
            </p>
          </div>

          <div className="text-center mt-8">
            <button
              className="btn btn-primary px-10 py-3 text-lg"
              onClick={() => handleOpenModal(vehicle)}
            >
              🚗 Book Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= Booking Modal ================= */}
      <dialog ref={modal} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-3xl rounded-2xl">

          <h3 className="text-2xl font-bold text-center mb-6">
            Confirm Your Booking
          </h3>

          {selectedVehicle && (
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={selectedVehicle.coverImage}
                className="rounded-xl object-cover"
              />

              <div className="space-y-3">
                <h4 className="text-xl font-semibold">
                  {selectedVehicle.vehicleName}
                </h4>

                <p className="text-sm text-base-content/60">
                  {selectedVehicle.category} • {selectedVehicle.location}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <ModalItem label="Transmission" value={selectedVehicle.transmission} />
                  <ModalItem label="Seats" value={selectedVehicle.seats} />
                  <ModalItem label="Owner" value={selectedVehicle.owner} />
                  <ModalItem
                    label="Price / Day"
                    value={`$${selectedVehicle.pricePerDay}`}
                    highlight
                  />
                </div>
              </div>
            </div>
          )}

          <div className="modal-action flex justify-between mt-8">
            <form method="dialog">
              <button className="btn btn-outline">Cancel</button>
            </form>
            <button
              onClick={handleConfirmBooking}
              className="btn btn-primary px-8"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

/* ================= Reusable Components ================= */

const Feature = ({ label, value, color = '' }) => (
  <div className="bg-base-200 p-3 rounded-lg">
    <p className="text-sm text-base-content/60">{label}</p>
    <p className={`font-semibold ${color}`}>{value}</p>
  </div>
);

const ModalItem = ({ label, value, highlight }) => (
  <div className="bg-base-200 p-3 rounded-lg">
    <p className="text-xs text-base-content/60">{label}</p>
    <p className={`font-semibold ${highlight && 'text-primary'}`}>
      {value}
    </p>
  </div>
);

export default ViewDetails;
