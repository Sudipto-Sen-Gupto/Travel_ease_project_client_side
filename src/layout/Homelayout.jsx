import React, { Suspense } from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';

const Homelayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={<p>data loading</p>}>
                <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;