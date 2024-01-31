import "./ListaSuspensa.css";

const ListaSuspensa = ({ name, label, mandatory, itens }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select name={name} defaultValue={""} required={mandatory}>
        <option disabled value="">
          Selecione a line
        </option>
        {itens.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
