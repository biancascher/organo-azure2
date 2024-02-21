import "./Player.css";
import { IoClose } from "react-icons/io5";

const Player = ({ nome, imagem, funcao, corDeFundo, toDelete }) => {
  return (
    <div className="player">
      <IoClose size={25} className="delete" onClick={toDelete} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{funcao}</h5>
      </div>
    </div>
  );
};

export default Player;
