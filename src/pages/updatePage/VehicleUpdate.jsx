import React from 'react';
import UseSecureAxios from '../../customhook/UseSecureAxios';
import update from '../../assets/homepage_pic/updatepicture.avif';

const VehicleUpdate = () => {
  const axiosSecureInstance = UseSecureAxios();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${update})` }}
    >

      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Vehicle
        </h2>

        <form>
          <fieldset className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
              />
            </div>

            <div className="text-right">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button className="btn btn-neutral w-full mt-2">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default VehicleUpdate;
