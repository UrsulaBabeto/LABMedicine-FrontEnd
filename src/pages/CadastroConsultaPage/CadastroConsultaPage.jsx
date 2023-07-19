import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";


import '../CadastroPacientePage/CadastroPacientePage.css'
import FormCadastroConsulta from "../../components/FormComponent/FormCadastroConsulta/FormCadastroConsulta";
function CadastroConsultaPage() {
    return ( 
    <>
    <div>
    <ToolbarComponent  titulo="Cadastro de Consulta" name="Ursula" avatar="" />
    </div>
    <div className="content">
   
    <NavbarComponent/>
     <FormCadastroConsulta></FormCadastroConsulta>
    </div>
    </> );
}

export default CadastroConsultaPage;