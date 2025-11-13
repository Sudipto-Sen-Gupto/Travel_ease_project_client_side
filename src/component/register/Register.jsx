import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

const Register = () => {
    const [show,setShow]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photoUrl=e.target.photoUrl.value;
        const email=e.target.email.value;
        const pass = e.target.email.value;
        // console.log({name,photoUrl,email,pass});
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleSubmit}>
         <fieldset className="fieldset">
          <label className="label">Full-Name</label>
          <input type="name" className="input" name='name' placeholder="write your name" />
          <label className="label">Photo-Url</label>
          <input type="text" className="input" placeholder="Photo_Url" name='photoUrl' />
            <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <div className='relative'>
            <label className="label">Password</label>
          <input type={show?'text':'password'} className="input" placeholder="Password" name='pass' />
          <button className='absolute top-6 right-6' onClick={()=>setShow(!show)}>{show? <Eye />: <EyeOff />}</button>
          </div>
         
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;