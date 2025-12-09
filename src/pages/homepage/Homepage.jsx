import React from 'react';
import Banner from '../../component/banner/Banner';
import Imagecard from '../../component/imgCard/Imagecard';
import Homedata from '../../component/homeData/Homedata';

const Homepage = () => {
    return (
        <div>
               <Banner></Banner>
               <Homedata></Homedata>
               <Imagecard></Imagecard>
        </div>
    );
};

export default Homepage;