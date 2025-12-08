import React from "react";

import coxesBazar from "../../assets/homepage_pic/coxesbazar.avif";
import sajek from "../../assets/homepage_pic/sajek.png";
import sundorban from "../../assets/homepage_pic/sundorban.avif";
import sylhet from "../../assets/homepage_pic/sylhet.jpg";

const Imagecard = () => {
  return (
              
           <div className="bg-blue-100 p-4">

                  <h1 className="text-4xl font-bold text-black text-center m-10 ">Your Next Adventure Awaits</h1>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
      
      <div className="relative h-auto md:h-[600px] group">
        <img
          src={coxesBazar}
          alt="Cox's Bazar"
          className="w-full h-full rounded-xl object-cover shadow-xl group-hover:scale-105 duration-300"
        />

        <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent w-full p-4 rounded-b-xl">
          <h2 className="text-white text-[20px] font-semibold">Cox's Bazar</h2>
          <p className="text-gray-200 text-[16px]">
            The longest sea beach in the world, full of sunset beauty.
          </p>
        </div>
      </div>

   
      <div className="grid grid-cols-1 gap-5 h-auto md:h-[600px]">

     
        <div className="grid grid-cols-2 gap-5">
          <div className="relative group rounded-xl overflow-hidden h-40 md:h-full">
            <img
              src={sajek}
              alt="Sajek"
              className="w-full h-full object-cover rounded-xl shadow-xl group-hover:scale-105 duration-300"
            />

            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-2 rounded-b-xl">
              <h2 className="text-white text-[20px] font-semibold">Sajek</h2>
              <p className="text-gray-200 text-[16px]">
                Mountains above the clouds.
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden h-40 md:h-full">
            <img
              src={sylhet}
              alt="Sylhet"
              className="w-full h-full object-cover rounded-xl shadow-xl group-hover:scale-105 duration-300"
            />

            <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-2 rounded-b-xl">
              <h2 className="text-white text-[20px] font-semibold">Sylhet</h2>
              <p className="text-gray-200 text-[16px]">
                Waterfalls & tea gardens.
              </p>
            </div>
          </div>
        </div>

        
        <div className="relative group rounded-xl overflow-hidden h-52 md:h-full">
          <img
            src={sundorban}
            alt="Sundarban"
            className="w-full h-full object-cover rounded-xl shadow-xl group-hover:scale-105 duration-300"
          />

          <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent w-full p-4 rounded-b-xl">
            <h2 className="text-white text-[20px] font-semibold">Sundarban</h2>
            <p className="text-gray-200 text-[16px]">
              Home of Royal Bengal Tiger & largest mangrove forest.
            </p>
          </div>
        </div>

      </div>

    </div>
           </div>
  );
};

export default Imagecard;
