import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FormCadastroConsulta from "../../components/FormComponent/FormCadastroConsulta/FormCadastroConsulta";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

import "../CadastroPacientePage/CadastroPacientePage.css";
function CadastroConsultaPage() {
  return (
    <>
      <div>
        <ToolbarComponent
          titulo="Cadastro de Consulta"
          name="Ursula"
          avatar=""
        />
      </div>
      <div className="content">
        <NavbarComponent />
        <FormCadastroConsulta/>
        
      </div>
    </>
  );
}

export default CadastroConsultaPage;
