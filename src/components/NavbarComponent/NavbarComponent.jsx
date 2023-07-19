import { GiDna2 } from "react-icons/gi";
import HomeIcon   from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import "./NavbarComponent.css";

import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <section>
    
        <div>
          <div className="logo">
           
            <GiDna2 />{" "}
          </div>
          <h1>LABMedicine</h1>
          <p>GERAL</p>
          <div className="icons">
            <HomeIcon />
            <a href=""> Inicio</a>
          </div>
          <div className="icons">
            <LogoutIcon />
            <a href="/">Sair</a>
          </div>
      
          <p>PACIENTES</p>
          <div className="icons">
           <AddIcon /> 
            <Link href="/cadastro-paciente">Cadastrar</Link>
          </div>
          <div className="icons">
            <FormatListBulletedIcon />
            <Link href="">Listar Prontuario</Link>
          </div>
      
          <p>EXAMES</p>
          <div className="icons">
            <AddIcon />
            <Link href="/cadastro-consulta">Cadastrar Consulta</Link>
          </div>
          <div className="icons">
            <AddIcon />
            <Link href="/cadastro-exame">Cadastrar Exame</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavbarComponent;
