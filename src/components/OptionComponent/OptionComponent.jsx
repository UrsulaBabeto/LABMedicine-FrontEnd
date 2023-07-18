import './OptionComponent.css'

function OptionComponent({ name, value, value1, value2, value3, id }) {
  return (
    <>
    <div>
      <label>{name}</label>
      <select id="valores">
        <option></option>
        <option id={id} value={value}>{value}</option>
        <option id={id} value={value1}>{value1}</option>
        <option id={id} value={value2}>{value2}</option>
        <option id={id} value={value3}>{value3}</option>
      </select>
      </div>
    </>
  );
}

export default OptionComponent;
