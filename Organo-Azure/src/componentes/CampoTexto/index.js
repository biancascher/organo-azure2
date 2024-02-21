import "./CampoTexto.css";

const CampoTexto = (props) => (
  <div className="campo-texto">
    <label>{props.label}</label>
    <input
      name={props.name}
      required={props.mandatory}
      placeholder={props.placeholder}
      defaultValue=""
    />
  </div>
);

export default CampoTexto;
