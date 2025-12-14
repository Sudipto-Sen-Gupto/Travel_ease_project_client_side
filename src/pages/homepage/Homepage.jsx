import React from 'react';
import Banner from '../../component/banner/Banner';
import Imagecard from '../../component/imgCard/Imagecard';
import Homedata from '../../component/homeData/Homedata';
import Staticcard from '../../component/Staticcard/Staticcard';

const Homepage = () => {
    return (
        <div>
               <Banner></Banner>
               <Homedata></Homedata>
               <Staticcard></Staticcard>
               <Imagecard></Imagecard>
        </div>
    );
};

export default Homepage;