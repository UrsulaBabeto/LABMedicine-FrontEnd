import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: {
user:{},
isLogged:false,
  },
  setAuth: () => {},
});

export function AuthProvider ({ children }) {
  const [auth, setAuth] = useState({
    user:{},
    isLogged:false,
  });

  return(
    <AuthContext.Provider value= {{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
  )
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};