import Card from '../Card';
import hexToRgba from 'hex-to-rgba';
import './Position.css';

const Position = ({position, players, deletePlayer}) => {
    return (
        (players.length > 0) && <section className='position' style={{ backgroundColor: hexToRgba(position.color, '0.6')}}>
            <h3 style={{ borderColor: position.color }}>{position.name}</h3>
            <div className='cards'>
                {players.map(item => 
                    <Card 
                        key={item.id} 
                        player={item} 
                        positionColor={position.color} 
                        deletePlayer={deletePlayer}
                    />
                )}
            </div>
        </section>
    );
};

export default Position;