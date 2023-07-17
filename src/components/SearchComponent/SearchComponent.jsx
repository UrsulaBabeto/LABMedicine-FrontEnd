import SecondaryButtonComponent from "../ButtonComponent/SecondaryButtonComponent";
import InputComponent from "../InputComponent/InputComponent";

function SearchComponent() {
  return (
    <>
      <section>
        <InputComponent
          type="text"
          id="search"
          placeholder="Digite um nome para buscar"
        />
        <SecondaryButtonComponent nome="Procurar" />
      </section>
    </>
  );
}

export default Component;
