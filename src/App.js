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

  const delettingPlayers = (player) => {
    setPlayers(players.filter(item => item !== player));
  };

  console.log(players)

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
      />)}
    </div>
  );
}

export default App;
