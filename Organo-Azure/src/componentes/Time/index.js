import Player from "../Player";
import "./Time.css";

const Time = (props) => {
  return (
    props.players.length > 0 && (
      <section className="time" style={{ backgroundColor: props.secondColor }}>
        <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>
        <div className="players">
          {props.players.map((player) => (
            <Player
              corDeFundo={props.firstColor}
              key={player.nome}
              nome={player.nome}
              funcao={player.funcao}
              imagem={player.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
