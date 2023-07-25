import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@mui/system";

function SecondaryButtonComponent({ nome, type }) {
  const teal = {
    100: "#b2dfdb",
    200: "#80cbc4",
    400: "#26a69a",
    500: "#00796b",
    600: "#00695c",
    900: "#004d40",
  };

  const StyledButton = styled(Button)(
    ({ theme }) => ` 
      margin:20px;
      border: 1px solid ${teal[600]};
      color:${teal[600]}
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 15px;
      border-radius: 4px;
      &:hover {
        border-color: ${teal[200]};
      }
      &:active {        
        box-shadow: 0 0 0 3px ${teal[100]};
 
      `
  );

  return (
    <StyledButton variant="outlined" type={type}>
      {nome}
    </StyledButton>
  );
}
export default SecondaryButtonComponent;
