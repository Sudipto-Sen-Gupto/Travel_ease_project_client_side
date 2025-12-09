import { Link } from "react-router";


const Homedatum = ({prop}) => {
          
    const product=prop; 

//    console.log(product);
    return (
        <div >
           
               <div class="card w-full bg-base-100 shadow-lg border border-gray-100 flex flex-col h-full">
  <figure class="relative">
    <img 
      src={product.coverImage} 
      class="w-full h-72 object-cover"
    />
   
    <div class="absolute top-4 left-4">
      <div class="badge badge-success text-white font-medium">{product.availability}</div>
    </div>
  
    <div class="absolute top-4 right-4">
      <div class="badge badge-warning gap-1 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
       {product.rating}
      </div>
    </div>
  </figure>

  <div class="card-body p-6">
    
    <h2 class="card-title text-2xl font-bold text-gray-800">
     {product.vehicleName}
    </h2>

  
    <div class="flex items-center gap-2 text-gray-600 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414-1.414 10 17.657 4.343 12 3 13.414l7 7 9-9z" />
      </svg>
      <span>{product.location}</span>
    </div>

   
    <p class="text-gray-700 text-sm line-clamp-2">
     {product.description}
    </p>

   
    <div class="flex flex-wrap gap-2 my-4">
      <div class="badge badge-outline">{product.categories}</div>
      <div class="badge badge-outline">{product.transmission}</div>
      <div class="badge badge-outline">{product.seats}</div>
    </div>

   
    <div class="card-actions justify-between items-end mt-5">
      <div>
        <div class="text-sm text-gray-500">Starting from</div>
        <div class="text-3xl font-bold text-amber-700">${product.pricePerDay}<span class="text-sm font-normal text-gray-600">/ day</span></div>
      </div>
      <Link to={`/viewdetails/${product._id}`} class="btn btn-primary bg-amber-700 hover:bg-amber-800 border-none text-white">
       View details
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Homedatum;