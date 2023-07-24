import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FormCadastroExame from "../../components/FormComponent/FormCadastroExame/FormCadastroExame";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { ToolbarContext } from "../../contexts/ToolbarContext/ToolbarContext";
import { useContext, useEffect } from "react";

import "../CadastroPacientePage/CadastroPacientePage.css";

function CadastroExamePage() {
  const { setToolbar } = useContext(ToolbarContext);
  
  useEffect(() => {
    setToolbar({
      title: "Cadastro de Exames",
      username: "Josué",
    avatar: "linkfoto"
    });
  }, []);
  return (
    <>
      <div>
        <ToolbarComponent titulo="Cadastro de Exame" name="Ursula" avatar="" />
      </div>
      <div className="content">
        <NavbarComponent />
        <FormCadastroExame />
      
      </div>
    </>
  );
}

export default CadastroExamePage;
