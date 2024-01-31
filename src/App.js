import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";

function App() {
  const times = [
    {
      name: "Azure Bears Golden",
      firstColor: "#DAA520",
      secondColor: "#ffffe0",
    },
    {
      name: "Azure Bears Black",
      firstColor: "#000000",
      secondColor: "#808080",
    },
    {
      name: "Azure Bears White",
      firstColor: "#e97feb",
      secondColor: "#f1bff2",
    },
  ];

  const [players, setPlayers] = useState([]);
  const newPlayer = (player) => {
    console.log(player);
    setPlayers([...players, player]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.name)}
        toPlayerRegistered={(player) => newPlayer(player)}
      />
      {times.map((time) => (
        <Time
          key={time.name}
          name={time.name}
          firstColor={time.firstColor}
          secondColor={time.secondColor}
          players={players.filter((player) => player.time === time.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
