import SecondaryButtonComponent from "../ButtonComponent/SecondaryButtonComponent";
import SimpleInputComponent from "../InputComponent/SimpleInput/SimpleInputComponent";


function SearchComponent() {
  return (
    <>
      <section>
        <SimpleInputComponent
          type="text"
          id="search"
          placeholder="Digite um nome para buscar"
        />
        <SecondaryButtonComponent nome="Procurar" />
      </section>
    </>
  );
}

export default SearchComponent;
