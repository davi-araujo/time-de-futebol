import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import Position from './components/Position';

function App() {
  const positionList = [
    {
      name: "Goleiro",
      color: "#B532BF",
    },
    {
      name: "Defensor",
      color: "#F5F109",
    },
    {
      name: "Meio-campista",
      color: "#EE7323",
    },
    {
      name: "Atacante",
      color: "#73BE45",
    }
  ];

  const [players, setPlayers] = useState([]);

  const delettingPlayers = (id) => {
    setPlayers(players.filter(item => item.id !== id));
  };

  const favorittingPlayer = (id) => {
    setPlayers(players.map(player => {
      if (player.id === id) {
        player.favorite = !player.favorite;
      }
      return player;
    }));
  };

  return (
    <div className="app">
      <Banner />
      <Form 
        list={positionList.map(item => item.name)} 
        newPlayer={ player => setPlayers([...players, player])} 
        title="Preencha as informações do jogador"
      />
      {positionList.map(itemPosition => <Position 
        key={itemPosition.name} 
        position={itemPosition} 
        players={players.filter(itemPlayer => itemPlayer.position === itemPosition.name)}
        deletePlayer={delettingPlayers}
        favorite={favorittingPlayer}
      />)}
    </div>
  );
}

export default App;
