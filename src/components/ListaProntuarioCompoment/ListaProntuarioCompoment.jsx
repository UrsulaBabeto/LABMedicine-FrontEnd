import * as React from "react";
import { Link } from "react-router-dom";
import ApiService from "../../service/ApiService/ApiService";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SearchComponent from "../SearchComponent/SearchComponent";

import "./ListaProntuarioCompoment.css";
function ListaProntuarioCompoment() {
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
    <>
      <div>
        <h3>Utilize a barra de pesquisa para buscar</h3>
        <SearchComponent />
      </div>

      <div>
        <ul className="listaprontuarioUL">
          {data.map((user) => (
            <li className="listaprontuarioLI" key={user.id}>
              <span> Registro: {user.id} </span>
              <span> Nome: {user.name}</span>{" "}
              <span>Convenio: {user.convenio}</span>
              <Link to={"/lista-prontuario"}>
                <DoubleArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListaProntuarioCompoment;

