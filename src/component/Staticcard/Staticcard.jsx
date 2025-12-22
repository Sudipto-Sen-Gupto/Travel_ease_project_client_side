import React from 'react';


const Staticcard = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 bg-base-200 p-10 rounded-3xl">
  <h2 className="text-3xl font-bold text-center mb-10 text-base-content">
    Why Choose TravelEase
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Top Categories */}
    <div className="bg-base-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition border border-base-300">
      <h3 className="text-xl font-semibold mb-3 text-base-content">
        Top Categories
      </h3>
      <p className="text-base-content/60 mb-4">
        Choose from a wide range of vehicles to suit your journey.
      </p>
      <ul className="text-base-content/70 space-y-1">
        <li>🚙 SUVs</li>
        <li>⚡ Electric</li>
        <li>🚐 Vans</li>
        <li>🚗 Sedans</li>
      </ul>
    </div>

    {/* Featured Owner */}
    <div className="bg-base-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition border border-base-300">
      <h3 className="text-xl font-semibold mb-3 text-base-content">
        Featured Owner
      </h3>
      <p className="text-base-content/60 mb-4">
        Trusted and highly rated vehicle owners you can rely on.
      </p>
      <div className="text-base-content/70">
        <p className="font-medium text-base-content">John Doe</p>
        <p className="text-sm">⭐ 4.9 Rating</p>
        <p className="text-sm">100+ Successful Bookings</p>
      </div>
    </div>

    {/* About TravelEase */}
    <div className="bg-base-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition border border-base-300">
      <h3 className="text-xl font-semibold mb-3 text-base-content">
        About TravelEase
      </h3>
      <p className="text-base-content/60">
        TravelEase is a smart vehicle rental platform that connects travelers
        with trusted vehicle owners, offering safe, affordable, and hassle-free
        journeys.
      </p>
    </div>

  </div>
</section>

  );
};




export default Staticcard;