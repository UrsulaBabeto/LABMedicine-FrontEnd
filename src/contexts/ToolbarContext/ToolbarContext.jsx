import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ToolbarContext = createContext({
  toolbar: {
    title:"",
    username:"",
    avatar:""
  },
  setToolbar: () => {},
});

export function ToolbarProvider ({ children }) {
  const [toolbar, setToolbar] = useState({
    title: "Home Page",
    username: "Josué",
    avatar: "/perfil.jpg"
  });

  return(
    <ToolbarContext.Provider value= {{toolbar, setToolbar}}>
        {children}
    </ToolbarContext.Provider>
  )
};

ToolbarProvider.propTypes = {
  children: PropTypes.node,
};