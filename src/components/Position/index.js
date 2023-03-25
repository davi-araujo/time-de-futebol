import Card from '../Card';
import './Position.css';

const Position = ({position, players}) => {
    return (
        (players.length > 0) && <section className='position' style={{ backgroundColor: position.secondaryColor}}>
            <h3 style={{ borderColor: position.primaryColor }}>{position.name}</h3>
            <div className='cards'>
                {players.map(item => <Card key={position.name} player={item} positionColor={position.primaryColor}/>)}
            </div>
        </section>
    );
};

export default Position;