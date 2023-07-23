import { GiDna2 } from "react-icons/gi";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BiotechIcon from "@mui/icons-material/Biotech";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
            <Link to="/home"> Inicio</Link>
          </div>
          <div className="icons">
            <LogoutIcon />
            <Link to="/">Sair</Link>
          </div>

          <p>PACIENTES</p>
          <div className="icons">
            <PersonAddAltIcon />
            <Link to="/cadastro-paciente">Cadastrar</Link>
          </div>
          <div className="icons">
            <FormatListBulletedIcon />
            <Link to="/prontuario">Listar Prontuario</Link>
          </div>

          <p>EXAMES</p>
          <div className="icons">
            <CalendarMonthIcon />
            <Link to="/cadastro-consulta">Cadastrar Consulta</Link>
          </div>
          <div className="icons">
            <BiotechIcon />
            <Link to="/cadastro-exame">Cadastrar Exame</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavbarComponent;
/* b. Deverá existir um botão para esconder e mostrar o menu lateral. */
