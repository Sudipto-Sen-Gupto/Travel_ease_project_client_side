import { Link } from "react-router";


const Homedatum = ({prop}) => {
          
    const product=prop; 

//    console.log(product);
    return (
        <div>
  <div className="card w-full bg-base-100 shadow-lg border border-base-300 flex flex-col h-full">

    {/* IMAGE */}
    <figure className="relative">
      <img
        src={product.coverImage}
        className="w-full h-72 object-cover"
      />

      <div className="absolute top-4 left-4">
        <div className="badge badge-success text-white font-medium">
          {product.availability}
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <div className="badge badge-warning gap-1 text-white">
          ⭐ {product.rating}
        </div>
      </div>
    </figure>

    {/* BODY */}
    <div className="card-body p-6">

      {/* TITLE */}
      <h2 className="card-title text-2xl font-bold text-base-content">
        {product.vehicleName}
      </h2>

      {/* LOCATION */}
      <div className="flex items-center gap-2 text-base-content/60 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M17.657 16.657L13.414-1.414 10 17.657 4.343 12 3 13.414l7 7 9-9z" />
        </svg>
        <span>{product.location}</span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-base-content/70 text-sm line-clamp-2">
        {product.description}
      </p>

      {/* BADGES */}
      <div className="flex flex-wrap gap-2 my-4">
        <div className="badge badge-outline">{product.categories}</div>
        <div className="badge badge-outline">{product.transmission}</div>
        <div className="badge badge-outline">{product.seats}</div>
      </div>

      {/* FOOTER */}
      <div className="card-actions justify-between items-end mt-5">

        <div>
          <div className="text-sm text-base-content/50">
            Starting from
          </div>

          <div className="text-3xl font-bold text-primary">
            ${product.pricePerDay}
            <span className="text-sm font-normal text-base-content/60">
              / day
            </span>
          </div>
        </div>

        <Link
          to={`/viewdetails/${product._id}`}
          className="btn btn-primary text-white"
        >
          View details
        </Link>

      </div>
    </div>
  </div>
</div>

    );
};

export default Homedatum;