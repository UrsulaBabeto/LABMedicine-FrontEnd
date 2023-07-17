function ToobarComponent({ name, avatar, titulo }) {
  return (
    <>
      <header>
        <div>
          <h2>{titulo}</h2>
        </div>
        <h3>Bem vindo, {name}</h3>
        <img src={avatar} alt="foto pessoal" />
      </header>
    </>
  );
}

export default ToobarComponent;
