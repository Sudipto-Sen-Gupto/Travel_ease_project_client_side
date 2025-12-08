import React from 'react';

 import banner1 from '../../assets/Banner/banner1.jpg'
 import banner2 from '../../assets/Banner/banner2.jpg'
 import banner3 from '../../assets/Banner/banner6.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div className='my-5'>
            <Carousel infiniteLoop={true} autoPlay={true} interval={2000}>
                <div>
                    <img src={banner1} />
                 
                </div>
                <div>
                    <img src={banner2} />
                  
                </div>
                <div>
                    <img src={banner3} />
                  
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;