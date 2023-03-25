import { TiDelete } from 'react-icons/ti';
import './Card.css';

const Card = ({player, positionColor, deletePlayer}) => {
    const deletting = () => {
        deletePlayer(player);
    };

    return (
        <div className='card'>
            <TiDelete size={18} onClick={deletting} className="delete-button"/>
            <div style={{ backgroundColor: positionColor }} className="card-header">
                <img src={player.image} alt="Player"/>
            </div>
            <div className='card-footer'>
                <h4>{player.name}</h4>
                <h5>{player.age} anos</h5>
            </div>
        </div>
    );
};

export default Card;