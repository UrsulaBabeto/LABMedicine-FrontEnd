import "./SecondaryButtonComponent.css"

function SecondaryButtonComponent({nome, type}) {
  return (
    <>
      <button className="create" type={type}>{nome}</button>
    </>
  );
}

export default SecondaryButtonComponent;
