import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="m-6">
                <ul className="flex justify-center">
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800 font-semibold" href="home">HOME</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800 font-semibold" href="reviews">REVIEWS</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800 font-semibold" href="dashboard">DASHBOARD</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800 font-semibold" href="blogs">BLOGS</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800 font-semibold" href="about">ABOUT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;