import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center py-12 gap-4'>
             <h1  className="text-5xl text-blue-700 font-medium">Auction<span className='font-bold text-yellow-500'>Gallery</span></h1>
             <div className=" flex">
                <ul className="menu menu-horizontal px-1">
                <li className='text-2xl'><a>Bid.</a></li>
                <li className='text-2xl'><a>Win.</a></li>
                <li className='text-2xl'><a>Own.</a></li>
                </ul>
            </div>
             <div className=" flex">
                <ul className="menu menu-horizontal px-1">
                <li className='text-2xl'><a>Home</a></li>
                <li className='text-2xl'><a>Auctions</a></li>
                <li className='text-2xl'><a>Categories</a></li>
                <li className='text-2xl'><a>How to work</a></li>
                </ul>
            </div>
            <p>Copyright © {new Date().getFullYear()} - AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;