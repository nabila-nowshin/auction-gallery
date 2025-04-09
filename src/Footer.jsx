import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center py-20 gap-4'>
             <h1  className="text-4xl text-blue-700 font-medium">Auction<span className='font-bold text-yellow-500'>Gallery</span></h1>
             <div className=" flex">
                <ul className="flex gap-4">
                <li className='text-lg'><a>Bid.</a></li>
                <li className='text-lg'><a>Win.</a></li>
                <li className='text-lg'><a>Own.</a></li>
                </ul>
            </div>
             <div className=" flex">
                <ul className="flex gap-10">
                <li className='text-lg'><a>Home</a></li>
                <li className='text-lg'><a>Auctions</a></li>
                <li className='text-lg'><a>Categories</a></li>
                <li className='text-lg'><a>How to work</a></li>
                </ul>
            </div>
            <p className='text-sm'>Copyright © {new Date().getFullYear()} - AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;