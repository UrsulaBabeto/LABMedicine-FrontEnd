import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FormCadastroExame from "../../components/FormComponent/FormCadastroExame/FormCadastroExame";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

import "../CadastroPacientePage/CadastroPacientePage.css";

function CadastroExamePage() {
  return (
    <>
      <div>
        <ToolbarComponent titulo="Cadastro de Exame" name="Ursula" avatar="" />
      </div>
      <div className="content">
        <NavbarComponent />
        <FormCadastroExame />
        <div className="button">
          <ButtonComponent nome={"Salvar"} />
        </div>
      </div>
    </>
  );
}

export default CadastroExamePage;
