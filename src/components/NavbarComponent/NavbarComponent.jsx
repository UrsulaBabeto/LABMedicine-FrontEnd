import { useState } from "react";
import { Link } from "react-router-dom";

import SwitchComponent from "../SwitchComponent/SwitchComponent";
import { GiDna2 } from "react-icons/gi";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BiotechIcon from "@mui/icons-material/Biotech";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./NavbarComponent.css";

function NavbarComponent() {
  const [showNavbarComponent, setNavbarComponent] = useState(false);

  const handleNavbarComponent = () => {
    setNavbarComponent(!showNavbarComponent);
  };
  const sectionWidth = showNavbarComponent ? "200px" : "600px";

  return (
    <>
      <section onClick={handleNavbarComponent} style={{ width: sectionWidth }}>
        {!showNavbarComponent ? (
          <div>
            <div className="logo">
              <GiDna2 />{" "}
            </div>
            <h1>LABMedicine</h1>
            <p>GERAL</p>

            <Link to="/home">
              {" "}
              <div className="icons">
                <HomeIcon />
                Inicio{" "}
              </div>
            </Link>

            <Link to="/">
              {" "}
              <div className="icons">
                <LogoutIcon />
                Sair{" "}
              </div>
            </Link>

            <p>PACIENTES</p>

            <Link to="/cadastro-paciente">
              {" "}
              <div className="icons">
                <PersonAddAltIcon />
                Cadastrar{" "}
              </div>
            </Link>

            <Link to="/prontuario">
              {" "}
              <div className="icons">
                <FormatListBulletedIcon />
                Listar Prontuario
              </div>
            </Link>

            <p>EXAMES</p>

            <Link to="/cadastro-consulta">
              {" "}
              <div className="icons">
                <CalendarMonthIcon />
                Cadastrar Consulta
              </div>
            </Link>

            <Link to="/cadastro-exame">
              {" "}
              <div className="icons">
                <BiotechIcon />
                Cadastrar Exame{" "}
              </div>
            </Link>
          </div>
        ) : (
          <div>
            <div className="logo">
              <GiDna2 />
            </div>
            <h2>LABMedicine</h2>
            <p>GERAL</p>
            <div>
              <Link to="/home">
                {" "}
                <HomeIcon />
              </Link>
            </div>
            <div>
              <Link to="/">
                {" "}
                <LogoutIcon />
              </Link>
            </div>

            <p>PACIENTES</p>
            <div>
              <Link to="/cadastro-paciente">
                {" "}
                <PersonAddAltIcon />
              </Link>
            </div>
            <div>
              <Link to="/prontuario">
                {" "}
                <FormatListBulletedIcon />
              </Link>
            </div>

            <p>EXAMES</p>
            <div>
              <Link to="/cadastro-consulta">
                <CalendarMonthIcon />
              </Link>
            </div>
            <div>
              <Link to="/cadastro-exame">
                <BiotechIcon />
              </Link>
            </div>
          </div>
        )}
        <div className="switchButton">
          <SwitchComponent id="switchButton" defaultChecked color="warning" />
        </div>
      </section>
    </>
  );
}

export default NavbarComponent;
