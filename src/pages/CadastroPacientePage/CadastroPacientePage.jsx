import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FormCadastroPacienteComponent from "../../components/FormComponent/FormCadastroPaciente/FormCadastroPaciente";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import "./CadastroPacientePage.css";

function CadastroPacientePage() {
  return (
    <>
      <div>
        <ToolbarComponent
          titulo="Cadastro de Paciente"
          name="Ursula"
          avatar=""
        />
      </div>
      <div className="content">
        <NavbarComponent />
        <FormCadastroPacienteComponent />
      </div>
 
        <div className="button1">
          <ButtonComponent nome={"Salvar"} />
        </div>
    </>
  );
}

export default CadastroPacientePage;
