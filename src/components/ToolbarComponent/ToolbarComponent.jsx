import "./ToolbarComponent.css";

function ToobarComponent({ name, avatar, titulo }) {
  return (
    <>
      <div className="header">
        <div>
          <h2>{titulo}</h2>
        </div>

        <div className="toolbarMargin">
          <h4>Bem vindo(a), {name}</h4>
        <div>
            <img src={avatar} alt="foto pessoal" />
            </div>
        </div>
      </div>
    </>
  );
}

export default ToobarComponent;
