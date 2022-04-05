import React, { useState } from 'react';
import img from'../images/banner.jpg';
import useReviews from '../hooks/useReviews';
import './Home.css';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className="home">
                <div className="home-text text-center">
                    <h2 className="text-5xl pt-14">ROG Zephyrus G14 AW SE</h2>
                    <h2 className="text-5xl pt-5">FHD Gaming Laptop</h2>
                    <p className="text-lg py-4">Asus ROG Zephyrus G14 AW SE GA401QEC Ryzen 9 5900HS <br /> RTX 3050 Ti 4GB Graphics 14" FHD Gaming Laptop. <br /> 16GB DDR4 3200MHz SDRAM (8GB+8GB)</p>
                    <button className="bg-gray-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">Live Demo</button>
                </div>
                <div className="home-imag">
                    <img src={img} alt="" />
                </div>  
            </div>
            <div className='text-center'>
                <h2 className='text-5xl mb-12'>Customer Reviews</h2>
                <div className='review-container mx-5'>
                    {
                        reviews.slice(0, 3).map(review => <Review 
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className='mb-5 more-btn'>
                    <a href="/reviews" className="bg-gray-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">see more Reveiws</a>
                </div>
            </div>
        </div>
    );
};

export default Home;