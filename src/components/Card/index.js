import './Card.css';

const Card = ({player, positionColor}) => {
    return (
        <div className='card'>
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