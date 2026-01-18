import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Useaxios from '../../customhook/Useaxios';
import { useQuery } from '@tanstack/react-query';
import Homedatum from '../../component/homeData/Homedatum';
import { AuthContext } from '../../component/authprovider/Authprovider';
import Loadingpage from '../loadingPage/Loadingpage';

const Allvehicles = () => {
  const [totalElements, setTotalElements] = useState(0);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder,setSortOrder]=useState('asc');
  const [search,setSearch]=useState('');
  const axiosInstance = Useaxios(AuthContext);
  const limit = 6;

  const { data: property = [], isLoading } = useQuery({
    queryKey: ['allVehicles', currentPage,sortOrder,search],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/allProperty?limit=${limit}&skip=${currentPage * limit}&sort=pricePerDay&order=${sortOrder}&search=${search}`
      );
      
      setTotalElements(res.data.total);
      setPage(Math.ceil(res.data.total / limit));
      return res.data.result;
    }
  }); 

  const handleSearch=(e)=>{
      const searchText=e.target.value;
      setCurrentPage(0);
      setSearch(searchText)
  }

  if (isLoading) return <Loadingpage />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-8xl mx-auto px-4"
    >
      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-2">
          Our Vehicle Services
        </h1>
        <p className="text-lg text-gray-500">
          Make your journey comfortable and secure
        </p>
      </div>

      {/* Search & Sort Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-center gap-4 bg-base-200 p-4 rounded-xl shadow-sm"
      >
        <h2 className="text-2xl font-semibold">
          Total Vehicles ({totalElements})
        </h2>

        {/* Search */}
        <div className="join">
          <input
            className="input join-item input-bordered" value={search}
            placeholder="Search vehicle" onChange={handleSearch}
          />
          
        </div>

        {/* Sort */}
        <select className="select select-bordered" onChange={(e)=>{
          setSortOrder(e.target.value);
           setCurrentPage(0)}}>

          <option disabled>Sort By</option>
          <option value={'asc'}>Price: Low to High</option>
          <option value={'desc'}>Price: High to Low</option>
          
        </select>
      </motion.div>

      {/* Vehicle Cards */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10"
      >
        {property.map((prop) => (
          <motion.div
            key={prop._id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Homedatum prop={prop} />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center flex-wrap gap-3 mb-10"
      >
        {currentPage > 0 && (
          <button
            className="btn btn-outline"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
        )}

        {[...Array(page).keys()].map((n) => (
          <button
            key={n}
            onClick={() => setCurrentPage(n)}
            className={`btn ${
              n === currentPage ? 'btn-primary' : 'btn-outline'
            }`}
          >
            {n + 1}
          </button>
        ))}

        {currentPage < page - 1 && (
          <button
            className="btn btn-outline"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Allvehicles;
