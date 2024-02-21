import "./Player.css";

const Player = ({ nome, imagem, funcao, corDeFundo }) => {
  return (
    <div className="player">
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
