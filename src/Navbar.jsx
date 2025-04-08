import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100  max-w-[90%] mx-auto">
          <div class="navbar-start">
            <h1  className="text-5xl text-blue-700 font-medium">Auction<span className='font-bold text-yellow-500'>Gallery</span></h1>
          </div>
          <div class="navbar-center flex">
            <ul class="menu menu-horizontal px-1">
              <li className='text-2xl'><a>Home</a></li>
              <li className='text-2xl'><a>Auctions</a></li>
              <li className='text-2xl'><a>Categories</a></li>
              <li className='text-2xl'><a>How to work</a></li>
            </ul>
          </div>
          <div class="navbar-end gap-5">
            <button class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 20 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                <span class="badge badge-xs badge-primary indicator-item">9</span>
              </div>
            </button>
            <button className="btn btn-ghost btn-circle">
                <div className='avatar'>
                    <div className='rounded-full'>
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </button>
          </div>
        </div>


    );
};

export default Navbar;