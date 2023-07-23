import { Link } from "react-router-dom";
import React, { useState } from "react";
import SwitchComponent from "../SwitchComponent/SwitchComponent";
import { GiDna2 } from "react-icons/gi";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./NavbarComponent.css";

function NavbarComponent() {
  const [showNavbarComponent, setNavbarComponent] = useState(false);

  const handleNavbarComponent = () => {
    setNavbarComponent(!showNavbarComponent);
  };
  const sectionWidth = showNavbarComponent ? "15%" : "35%";

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
            <div className="icons">
              <HomeIcon />
              <Link to="/home">Inicio</Link>
            </div>
            <div className="icons">
              <LogoutIcon />
              <Link to="/">Sair</Link>
            </div>

            <p>PACIENTES</p>
            <div className="icons">
              <AddIcon />
              <Link to="/cadastro-paciente">Cadastrar</Link>
            </div>
            <div className="icons">
              <FormatListBulletedIcon />
              <Link to="/prontuario">Listar Prontuario</Link>
            </div>

            <p>EXAMES</p>
            <div className="icons">
              <AddIcon />
              <Link to="/cadastro-consulta">Cadastrar Consulta</Link>
            </div>
            <div className="icons">
              <AddIcon />
              <Link to="/cadastro-exame">Cadastrar Exame</Link>
            </div>
          </div>
        ) : (
          <div >
            <div  className="logo">
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
                <AddIcon />
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
                <AddIcon />
              </Link>
            </div>
            <div>
              <Link to="/cadastro-exame">
                <AddIcon />
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
