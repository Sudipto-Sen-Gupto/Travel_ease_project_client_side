import React, { use, useState } from 'react';
import { AuthContext } from '../authprovider/Authprovider';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import Googlelog from '../googleLog/Googlelog';

const Login = () => {
           
    const {user,userLogin}=use(AuthContext);

    const navigate=useNavigate();
    const location=useLocation();
    console.log(location);
        
     const [show,setShow]=useState(false)
      const handleLogin=(e)=>{
             e.preventDefault();
             const email= e.target.email.value;
             const pass=e.target.pass.value;
             console.log(email,pass);

             userLogin(email,pass).then(()=>{
                toast("log in successfully")

                // navigate(location?.state || '/')
                navigate(`${location.state? location.state:'/'}`)
             }).catch(err=>console.log(err))
      }

    return (
        <div>
            <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <form onSubmit={handleLogin}>

            <fieldset class="fieldset">
          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email" name='email' />
          <label class="label">Password</label>
        
              <div className='relative'>
                  <input type={show? 'text': 'password'} class="input" placeholder="Password" name='pass' />
                    
                    
                    <p className='absolute top-3 right-5' onClick={()=>setShow(!show)}> {show?<Eye /> :<EyeOff />}
                    
                    </p>
                    
                  
              </div>
         
          <div><a class="link link-hover">Forgot password?</a></div>
          <button class="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form> 
               <p>Create an account? <Link to={'/register'}><span className='text-blue-400 underline'>Register now</span></Link></p>
             <Googlelog></Googlelog>
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;