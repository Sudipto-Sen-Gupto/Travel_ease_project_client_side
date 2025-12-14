import React from 'react';
import error from '../../assets/Error-page-image/err.avif'
import { Link } from 'react-router';
const Errorpage = () => {
    return (
        <div className='relative'>
            <img src={error} className='w-full h-[800px]' alt="Error page" />

            <Link to={'/'} className='btn btn-primary absolute top-1/2 right-[400px]'>Go to home</Link>
        </div>
    );
};

export default Errorpage;