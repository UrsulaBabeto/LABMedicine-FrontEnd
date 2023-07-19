import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FormCadastroUsuarioComponent from "../../components/FormComponent/FormCadastroUsuario/FormCadastroUsuarioComponent";

import './CadastroPacientePage.css'
function CadastroPacientePage() {
    return ( 
    <>
    <div>
    <ToolbarComponent  titulo="Cadastro de Paciente" name="Ursula" avatar="" />
    </div>
    <div className="content">
   
    <NavbarComponent/>
    <FormCadastroUsuarioComponent/>
    </div>
    </> );
}

export default CadastroPacientePage;