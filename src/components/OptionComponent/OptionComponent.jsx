import './OptionComponent.css'

function OptionComponent({ name, value, value1, value2, value3 }) {
  return (
    <>
    <div>
      <label>{name}</label>
      <select id="valores">
        <option></option>
        <option value={value}>{value}</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
      </select>
      </div>
    </>
  );
}

export default OptionComponent;
