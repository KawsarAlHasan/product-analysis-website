import React from 'react';
import img from'../images/banner.jpg';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home-text text-center">
                    <h2 className="text-5xl pt-14">ROG Zephyrus G14 AW SE</h2>
                    <h2 className="text-5xl pt-5">FHD Gaming Laptop</h2>
                    <p className="text-lg py-4">Asus ROG Zephyrus G14 AW SE GA401QEC Ryzen 9 5900HS <br /> RTX 3050 Ti 4GB Graphics 14" FHD Gaming Laptop. <br /> 16GB DDR4 3200MHz SDRAM (8GB+8GB)</p>
                    <button class="bg-gray-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">Live Demo</button>
                </div>
                <div className="home-imag">
                    <img src={img} alt="" />
                </div>  
            </div>
        </div>
    );
};

export default Home;