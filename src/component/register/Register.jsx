import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react';
import { AuthContext } from '../authprovider/Authprovider';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Googlelog from '../googleLog/Googlelog';

const Register = () => {
  const {signUpWithUser}=use(AuthContext)

    const [show,setShow]=useState(false)
    const [error,setError]=useState("");

   const navigate=useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photoUrl=e.target.photoUrl.value;
        const email=e.target.email.value;
        const pass = e.target.pass.value;
        // console.log({name,photoUrl,email,pass});

        //password length validation
          if(pass.length<6){
            return setError("Your password should be at least Six character")
          }
              
          // lowercase letter validation
          const hasLowerCase = /^(?=.*[a-z]).+$/;

          if(!hasLowerCase.test(pass)){
            return setError("At least one lowercase letter must contain into password")
          }
            
          //UPPERCASE letter validation
          const hasUpperCase=/^(?=.*[A-Z]).+$/;

          if(!hasUpperCase.test(pass)){
                return setError("At least one UPPERCASE letter must contain into password")
          }

        signUpWithUser(email,pass,name,photoUrl).then(()=>{toast("Sign Up successful")
              
           navigate('/')

        }).catch(err=>toast(err.message))
       
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
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
          <p className='absolute top-6 right-6' onClick={()=>setShow(!show)}>{show? <Eye />: <EyeOff />}</p>
          </div>

                 <p className='text-red-600'>{error} </p>

          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
       </form>
       <p>Have already an account? <Link to={'/login'} className='to-blue-700 underline'>Sign in</Link></p>

       <Googlelog></Googlelog>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;