import { useContext, useEffect } from "react";
import { ToolbarContext } from "../../contexts/ToolbarContext/ToolbarContext";

import ToolbarComponent from "../../components/ToolbarComponent/ToolbarComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ProntuarioPacienteComponent from "../../components/ProntuarioPacienteComponent/ProntuarioPacienteComponent";



function ProntuarioPacientePage() {
    
          const { setToolbar } = useContext(ToolbarContext);
        
          useEffect(() => {
            setToolbar({
              title: "Cadastro de Pacientes",
              username: "Ursula",
            });
          }, []);
          return (
            <>
              <div>
                <ToolbarComponent />
              </div>
              <div className="content">
                <div>
                  <NavbarComponent />
                </div>
        <div>
        
                <ProntuarioPacienteComponent />
        </div>
              </div>
            </>
          );
     
        
    }
    


export default ProntuarioPacientePage;