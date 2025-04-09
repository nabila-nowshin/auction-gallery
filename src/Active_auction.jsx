import React, { use, useState } from 'react';
import BidItem from './BidItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Favorites from './Favorites';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Active_auction = ({bidItemsPromise}) => {

    const bidItems=use(bidItemsPromise);
    // console.log(bidItems);

   
    const [favorites,setToFavorites]=useState([]);
    const [bidAmount,setBidAmount]=useState(0);

    const addToFavorite=(item)=>{
        setToFavorites([...favorites,item]);
        
        let newBid=bidAmount+item.currentBidPrice;
        setBidAmount(newBid);

        toast.success(`${item.title} added to favorites!`)
    }

    const removeFavorite=(item)=>{
        setToFavorites((prevFavorites) =>
            prevFavorites.filter((favItem) => favItem.id !== item.id)
          );
        
        let newBid=bidAmount-item.currentBidPrice;
        setBidAmount(newBid);

        toast.error(`${item.title} removed from favorites!`);
    }
    
    return (

        <div className='bg-blue-200  px-[5%] py-30'>
             <ToastContainer />
            <h2 className='text-3xl pb-3'>Active Auctions</h2>
            <p className='text-xl font-light pb-10'>Discover and bid on extraordinary items</p>
 
            <div className='md:flex gap-[5%]'>
                <div className='w-[60%]'>
                    <div className="rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className='text-xl text-black '>
                            <th>Items</th>
                            <th>Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                        </thead>
                        <tbody>
                       
                        {
                            bidItems.map(item=> <BidItem 
                                key={item.id}
                                item={item}
                                addToFavorite={addToFavorite}
                                fav={favorites.some(favItem => favItem.id === item.id)}

                                > 
                                </BidItem>)
                        }
                        </tbody>
                    </table>
                    </div>
                </div>
            
                <div className='w-[40%]'>
                    <div className=" bg-base-100">
                        <div className="table text-center">
                            <div className='text-blue-500 text-2xl border-b border-gray-200 py-5 font-medium'>
                                <p><FontAwesomeIcon icon={faHeart}/> Favorite Items</p>
                            </div>

                            <div className='border border-b-1 border-gray-300'>
                            {
                                favorites.length!==0 ? 
                                (
                                    favorites.map(i => (<div key={i.id} className='px-3 py-3'> <Favorites  i={i} removeFavorite={removeFavorite}></Favorites></div> 
                                    ))
                                ) 
                                : 
                                
                                (
                            <div className='text-lg font-medium py-5 px-[20%]  '>
                                <h1 className='pb-4 font-bold' >No favorites yet</h1>
                                <p className='pb-4'>Click the Heart icon on any item to add it to your favorites</p>
                            </div>
                            )
                            }
                            
                                <div className='flex justify-between text-xl px-[10%] text-medium py-5 border border-t-1 border-gray-300'>
                                    <p className='text-xl'>Total Bids Amount:</p>
                                    <p className='text-xl '>${bidAmount}</p>
                                </div>

                            
                       
                    </div>
                   </div>
                </div>
                </div>

            </div>    
        </div>
    );
};

export default Active_auction;