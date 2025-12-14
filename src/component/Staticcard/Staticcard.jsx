import React from 'react';


const Staticcard = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 bg-slate-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose TravelEase
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Top Categories */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Top Categories</h3>
          <p className="text-gray-600 mb-4">
            Choose from a wide range of vehicles to suit your journey.
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>🚙 SUVs</li>
            <li>⚡ Electric</li>
            <li>🚐 Vans</li>
            <li>🚗 Sedans</li>
          </ul>
        </div>

        {/* Featured Owner */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Featured Owner</h3>
          <p className="text-gray-600 mb-4">
            Trusted and highly rated vehicle owners you can rely on.
          </p>
          <div className="text-gray-700">
            <p className="font-medium">John Doe</p>
            <p className="text-sm">⭐ 4.9 Rating</p>
            <p className="text-sm">100+ Successful Bookings</p>
          </div>
        </div>

        {/* About TravelEase */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">About TravelEase</h3>
          <p className="text-gray-600">
            TravelEase is a smart vehicle rental platform that connects
            travelers with trusted vehicle owners, offering safe, affordable,
            and hassle-free journeys.
          </p>
        </div>

      </div>
    </section>
  );
};




export default Staticcard;