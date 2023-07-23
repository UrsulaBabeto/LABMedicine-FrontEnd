import { useContext } from "react";
import { ToolbarContext } from "../../contexts/ToolbarContext/ToolbarContext";

import "./ToolbarComponent.css";

function ToolbarComponent() {
  const{toolbar, setToolbar} = useContext(ToolbarContext)
  return (
    <>
      <div className="header">
        <div>
          <h2>{toolbar.title}</h2>
        </div>

        <div className="toolbarMargin">
          <h4>Bem vindo(a), {toolbar.username}</h4>
        <div>
            <img src={toolbar.avatar} alt="foto pessoal" />
            </div>
        </div>
      </div>
    </>
  );
}

export default ToolbarComponent;
