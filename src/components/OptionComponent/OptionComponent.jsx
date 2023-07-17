function OptionComponent({ name,value,value1,value2,value3}) {
    return ( 

<select name="" id="valores">{name}
    <option></option>
    <option value={value}></option>
    <option value={value1}></option>
    <option value={value2}></option>
    <option value={value3}></option>
</select>
     );
}

export default OptionComponent;