import * as React from "react";
import ApiService from "../../../service/ApiService/ApiService";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import "./CardPacienteComponent.css";

function CardPacienteComponent() {
  const service = new ApiService("pacientes");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const service = new ApiService("pacientes");
      const data = await service.Get();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className="cardPacienteUL">
        {data.map((user) => (
          <li className="cardPacienteLI" key={user.id}>
            <h2 className="cardPacienteH2">{user.name}</h2>
            <div className="cardPacienteDIV">
              <Typography>{user.tel}</Typography>
              <p>{user.convenio}</p>
              <Link to={"/prontuario-paciente"}>ver mais</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CardPacienteComponent;
