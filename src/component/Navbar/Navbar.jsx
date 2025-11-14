import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './nav.css'
import { AuthContext } from '../authprovider/Authprovider';
import profile from '../../assets/user.png';
const Navbar = () => {

   const {user,signout}=use(AuthContext)

   const handleSignOut=()=>{
    signout().then(res=>console.log(res)).catch(err=>console.log(err))
   }

  const list =<nav className='space-x-6'>
         <NavLink to={'/'}>Home</NavLink>
         <NavLink to={'allvehicles'}>All Vehicles</NavLink>
         
          <NavLink to={'addvehicles'}>Add Vehicles</NavLink>
         <NavLink to={'myvehicles'}>My Vehicles</NavLink>
         <NavLink to={'mybook'}>My Bookings</NavLink>
         
         
  </nav>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {list}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Travel Agency</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {list}
    </ul>
  </div>
  <div className="navbar-end">
    <img src={user?user.photoURL:profile} className={`w-[50px] h-[50px] rounded-full mx-2`} alt="" />
 {
  user?  <button className='btn btn-outline' onClick={handleSignOut}>Log Out</button>: <Link to={'/login'}> <button className='btn btn-outline'>Log In</button></Link>
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