import React, { useContext } from "react";
import { ToolbarContext } from "../../contexts/ToolbarContext/ToolbarContext";

import "./ToolbarComponent.css";

function ToolbarComponent() {
  const { toolbar } = useContext(ToolbarContext);

  return (
    <div className="header">
      <div className="tituloToolbar">
        <h2>{toolbar.title}</h2>
      </div>
      <div className="toolbarMargin">
        
          <h4>Bem vindo(a), {toolbar.username}</h4>
          <img className="avatar" src={toolbar.avatar} alt="foto pessoal" />
        
      </div>
    </div>
  );
}

export default ToolbarComponent;
