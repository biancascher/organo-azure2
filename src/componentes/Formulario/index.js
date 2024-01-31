import CampoTexto from "../CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useRef } from "react";

const Formulario = (props) => {
  const formRef = useRef(null);

  const saving = (event) => {
    event.preventDefault();
    props.toPlayerRegistered({
      nome: event.target[0].value,
      funcao: event.target[1].value,
      imagem: event.target[2].value,
      time: event.target[3].value,
    });

    formRef.current?.reset();
  };

  return (
    <section className="formulario">
      <form ref={formRef} onSubmit={saving}>
        <h2>Preencha os dados para criar um card do player.</h2>
        <CampoTexto
          mandatory={true}
          label="Nome"
          placeholder="Digite seu nick"
          name="name"
        />
        <CampoTexto
          mandatory={true}
          label="Função"
          placeholder="Digite sua função"
          name="role"
        />
        <CampoTexto
          mandatory={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          name="avatar"
        />
        <ListaSuspensa
          mandatory={true}
          label="Time"
          name="team"
          itens={props.times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
