import { GiDna2 } from "react-icons/gi";
import { SiHomebridge } from "react-icons/si";
import { GiExitDoor } from "react-icons/gi";
import { IoMdAddCircleOutline, IoIosList } from "react-icons/io";
import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <>
      <section>
    
        <div>
          <div className="logo">
            {" "}
            <GiDna2 />{" "}
          </div>
          <h1>LABMedicine</h1>
          <p>Geral</p>
          <div className="icons">
            <SiHomebridge />
            <a href=""> INICIO</a>
          </div>
          <div className="icons">
            <GiExitDoor />
            <a href="">SAIR</a>
          </div>
          <p>Pacientes</p>
          <div className="icons">
            <IoMdAddCircleOutline />
            <a href="">CADASTRAR</a>
          </div>
          <div className="icons">
            <IoIosList />
            <a href="">LISTAR PRONTUARIO</a>
          </div>
          <p>Exames</p>
          <div className="icons">
            <IoMdAddCircleOutline />
            <a href="">CADASTRAR CONSULTA</a>
          </div>
          <div className="icons">
            <IoMdAddCircleOutline />
            <a href="">CADASTRAR EXAME</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavbarComponent;
/* b. Deverá existir um botão para esconder e mostrar o menu lateral. */