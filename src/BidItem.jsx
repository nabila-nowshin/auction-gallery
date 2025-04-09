
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const BidItem = ({item,addToFavorite,fav}) => {
    const heartButtonHandler=()=>{
        if(fav!==true){
            addToFavorite(item);
        }
        
        
    }
    return (
        <tr className='text-lg border-b border-gray-200'>
            <td className='flex items-center gap-3'>
                <img src={item.image} alt="" className='w-15'/>
                <p className='flex-1 truncate'>{item.title}</p>
            </td>
            <td className='text-center'>{item.currentBidPrice
            }</td>
            <td className='text-center'>{item.timeLeft}</td>
            <td 
            onClick={heartButtonHandler}
            className='text-center'>
                <button 
                className={` ${fav ? 'cursor-not-allowed' : ''}`}  
                disabled={fav}>
                    <FontAwesomeIcon 
                    icon={fav? faHeartSolid: faHeart} 
                    className={` text-2xl ${fav? "text-red-500":"" }`} 
                    />
                </button>
            </td>

            
        </tr>
        
    );
};

export default BidItem;