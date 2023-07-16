import {  GiDna2 } from "react-icons/gi";
import './NavbarComponent.css'
function NavbarComponent() {
    return (  <><section>
        {/* <ToolbarComponent/> */}
          <div  >
            <div className="logo"> <GiDna2/> </div>
          <h1>LABMedicine</h1>      
            <p>Geral</p>
            <a href="">INICIO</a><br />
            <a href="">SAIR</a><br />
            <p>Pacientes</p>
            <a href="">CADASTRAR</a><br />
            <a href="">LISTAR PRONTUARIO</a><br />
            <p>Exames</p>
            <a href="">CADASTRAR CONSULTA</a><br />
            <a href="">CADASTRAR EXAME</a><br />
        </div>
        </section>
    </>);
}

export default NavbarComponent;