import React, { use } from 'react';

import image2 from '../../assets/homepage_pic/gettyimages-2234313553-1024x1024.jpg'
import { AuthContext } from '../../component/authprovider/Authprovider';


import Swal from 'sweetalert2';
import UseSecureAxios from '../../customhook/UseSecureAxios';
const Addvehicles = () => {

    const {user}=use(AuthContext);
    // const axiosInstance=Useaxios();
     const axiosSecureInstance=UseSecureAxios();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const vehicleName=e.target.vehicleName.value;
        const ownerName=e.target.ownerName.value;
        const category=e.target.category.value;
        const price=e.target.price.value;
        const location=e.target.location.value;
        const availability=e.target.availability.value;
        const description=e.target.des.value;
        const coverImage=e.target.image.value;
        const email=e.target.email.value;

        const vehicleInfo={vehicleName,ownerName,category,price,location,availability,description,coverImage,email}

        console.log(vehicleInfo);

          axiosSecureInstance.post('/addvehicle',vehicleInfo).then(res=>{
            console.log(res.data);

            if(res.data.insertedId){
                        
                Swal.fire({
                 title: "Vehicle Added Successfully!",
                  icon: "success",
                    draggable: true,
                    timer:1500
                       });
            }
           
          }).catch(err=>console.log(err.message))
    }
    
    return (
            

        <div className='flex flex-col md:flex-row '>

             
         
          <div>
             <img src={image2} className='h-full' alt="" />
          </div>

            <div className='bg-blue-400 w-full h-full my-auto p-25' >
                <h1 className='text-3xl font-bold text-center'>Add your vehicle</h1>
             <form onSubmit={handleSubmit} className=''>
                    
                    <fieldset className="fieldset text-[20px] space-y-2">
          <label className="label">Vehicle Name</label>
          <input type="text" className="input w-full" name='vehicleName' placeholder="Write vehicle name" />


          <label className="label">Owner Name</label>
          <input type="text" className="input w-full" placeholder=" Write Owner Name" name='ownerName' />

          <label className="label">Category</label>
          <input type="text" className="input w-full" placeholder="Write category" name='category' />

          <label className="label">Price Per Day</label>
          <input type="text" className="input w-full" placeholder="Write the price" name='price'/>

          <label className="label">Location </label>
          <input type="text" className="input w-full" placeholder="Write your location" name='location'/>

          <label className="label">Availability</label>
          <input type="text" className="input w-full" placeholder="Write availability" name='availability' />

          <label className="label">Description</label>
          <textarea type="text" className="input w-full" placeholder="Write some description" name='des'/>

          <label className="label">Cover image</label>
          <input type="file" className="input w-full" name='image'/>

          <label className="label">Email</label>
          <input type="email" className="input w-full" defaultValue={user.email} name='email' readOnly/>
            
            <button className='btn btn-primary'>Add your information</button>

          
         
        </fieldset>

             </form>
        </div>


        
        </div>
    );
    //, Price Per Day, Location, Availability, Description, 
      //Cover Image, User Email (auto from logged-in user). 
};

export default Addvehicles;