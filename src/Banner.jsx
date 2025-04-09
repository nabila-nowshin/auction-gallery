import React from 'react';

const Banner = () => {
    return (
        <div>
           <div
                className="hero h-[800px] p-0 bg-cover bg-center flex"
                style={{
                    backgroundImage: "url('Banner-min.jpg')",
                }}
                >
                <div className="text-white text-left ml-0 w-[40%] pl-[05%]">
                    <h1 className="text-4xl font-bold">Bid on Unique Items from Around the World</h1>
                    <p className="py-6 text-xl font-light">
                    Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="btn bg-white text-black rounded-4xl text-lg p-5 font-light">Explore Auctions</button>
                </div>
            </div>


  
        </div>
    );
};

export default Banner;