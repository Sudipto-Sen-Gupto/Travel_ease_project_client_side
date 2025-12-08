import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/icons/beach.png'
const Logo = () => {
    return (
        <div>
            <Link to={'/'} className="btn btn-ghost text-xl">  <img src={logo} alt="" className='h-10 w-10' /> <span> Travel Agency</span> </Link>
        </div>
    );
};

export default Logo;