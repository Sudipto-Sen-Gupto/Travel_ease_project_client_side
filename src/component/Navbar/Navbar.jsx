import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import './nav.css'
import { AuthContext } from '../authprovider/Authprovider';
import profile from '../../assets/user.png';
import { toast } from 'react-toastify';
import Logo from '../logo/Logo';

const Navbar = () => {

   const {user,signout}=use(AuthContext)
   console.log(user);
   const handleSignOut=()=>{
    signout().then(()=>toast("Log out successful")).catch(err=>console.log(err))
   }
     

     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
    
    const handleToggle=(checked)=>{
              // console.log(checked);
              // const html=document.querySelector('html');
              // if(checked){
              //   html.setAttribute("data-theme",'dark')
              // }
              // else{
              //   html.setAttribute('data-theme','light')
              // }

               setTheme(checked ? "dark" : "light");
    }

  const list =<nav className='space-x-6 flex flex-col gap-5 md:flex-row'>
         <NavLink to={'/'}>Home</NavLink>
         <NavLink to={'allvehicles'}>All Vehicles</NavLink>
         
          <NavLink to={'addvehicles'}>Add Vehicles</NavLink>
         <NavLink to={'myvehicles'}>My Vehicles</NavLink>
         <NavLink to={'mybook'}>My Bookings</NavLink>
         
         
  </nav>
    return (
        <div>
            <div className="navbar  shadow-lg   bg-[url('src/assets/Image/background.avif')] bg-cover pb-[300px] text-white">
              
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
       {list}
      </ul>
    </div>
            <div>
              <Logo></Logo>
               <input
           onChange={(e)=>handleToggle(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle mx-5 my-4 bg-blue-600"/>

            </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {list}
    </ul>
  </div>
  <div className="navbar-end">
    <img src={user? user.photoURL : profile } title={`${user?user.displayName:''}`}  className={`hidden md:block w-[50px] h-[50px] rounded-full mx-2 `} alt="" />
 {
  user?  <button className='btn btn-outline ' onClick={handleSignOut}>Log Out</button>: <Link to={'/login'}> <button className='btn btn-outline '>Log In</button></Link>
 }
  {
    user?'':<Link to={'/register'}> <button className='btn btn-primary'>Sign up</button></Link>
  }
  </div>
</div>
        </div>
    );
};

export default Navbar;