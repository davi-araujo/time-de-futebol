import { useState } from 'react';
import './App.css';

import Banner from './components/Banner';
import Form from './components/Form';
import Position from './components/Position';

function App() {
  const positionList = [
    {
      name: "Goleiro",
      primaryColor: "#93123B",
      secondaryColor: "#a15a70"
    },
    {
      name: "Defensor",
      primaryColor: "#D5282B",
      secondaryColor: "#FF9496"
    },
    {
      name: "Meio-campista",
      primaryColor: "#EE7323",
      secondaryColor: "#FFD29D"
    },
    {
      name: "Atacante",
      primaryColor: "#73BE45",
      secondaryColor: "#C1E5AD"
    }
  ];

  const [players, setPlayers] = useState([]);

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
      />)}
    </div>
  );
}

export default App;
