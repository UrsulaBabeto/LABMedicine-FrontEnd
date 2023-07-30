import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { styled } from "@mui/system";

function ButtonComponent({ nome, type }) {
  const teal = {
    100: "#b2dfdb",
    200: "#80cbc4",
    400: "#26a69a",
    500: "#00796b",
    600: "#00695c",
    900: "#004d40",
  };

  const StyledButton1 = styled(Button)(
    ({ theme }) => `
      margin: 20px;
      border: 1px solid ${teal[600]};
      color: ${teal[100]};
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 15px;
      border-radius: 4px;
      background-color: ${teal[900]};
      &:hover {
      border:none;
        background-color: ${teal[400]};
      }
      &:active {        
        box-shadow: 0 0 0 3px ${teal[100]};
      };
    `
  );

  return (
    <StyledButton1 variant="contained" type={type}>
      {nome}
    </StyledButton1>
  );
}

export default ButtonComponent;

ButtonComponent.propTypes = {
  nome: PropTypes.string,
  type: PropTypes.string,
};
