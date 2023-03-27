import { TiDelete } from 'react-icons/ti';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import './Card.css';

const Card = ({player, color, deletePlayer, favorite}) => {
    
    const deletting = () => {
        deletePlayer(player.id);
    };

    const favoritting = () => {
        favorite(player.id);
    }

    return (
        <div className='card'>
            <TiDelete size={18} onClick={deletting} className="delete-button"/>
            <div style={{ backgroundColor: color }} className="card-header">
                <img src={player.image} alt="Player"/>
            </div>
            <div className='card-footer'>
                <h4>{player.name}</h4>
                <h5>{player.age} anos</h5>
                {
                    player.favorite ? 
                    <MdOutlineFavorite 
                        onClick={favoritting} 
                        className="favorite" 
                        size={18} 
                        style={ {color: "red"} }
                    /> : 
                    <MdOutlineFavoriteBorder 
                        onClick={favoritting} 
                        className="favorite" 
                        size={18} 
                        style={ {color: "black"} }
                    />
                }
            </div>
        </div>
    );
};

export default Card;