import React from 'react';

const Favorites = ({i,removeFavorite}) => {
    return (
        <div className='text-lg '>
            <div className='flex items-center gap-4 justify-around'>
                <div className=''><img src={i.image} alt="" className='w-15'/></div>
                <div className='text-left flex-1'>
                    <p className='pb-2'>{i.title}</p>
                    <div className='flex gap-5'>
                        <p>${i.currentBidPrice}</p>
                        <p>Bids :{i.bidsCount}</p>
                    </div>
                </div>
                <div className=''>
                    <button className='btn' onClick={()=>{removeFavorite(i)}}>X</button>
                </div>
            </div>
            
        </div> 
    );
};

export default Favorites;