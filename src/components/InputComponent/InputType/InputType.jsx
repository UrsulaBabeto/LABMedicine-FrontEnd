import * as React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";


import { styled } from "@mui/system";

export default function InputType({
  label,
  id,
  type,
  placeholder,
  mask,
  error,
  register
}) {
  const teal = {
    100: "#b2dfdb",
    200: "#80cbc4",
    400: "#26a69a",
    500: "#00796b",
    600: "#00695c",
    900: "#004d40",
  };

  const red = {
    500: "#FA1212",
  };

  const StyledInput = styled(TextField)(
    ({ theme }) => ` 
    margin:10px;
    `
  );

  return (
   
        <StyledInput
          required
          mask={null}
          type={type}
          placeholder={placeholder}
          id={id}
          label={label}
          {...register}
       
          style={{
            borderColor: error ? red[500] : teal[900],
          }}
        />
      )}

      InputType.propTypes = {
        label: PropTypes.string,
        id: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        error: PropTypes.any,
        register: PropTypes.any,
      };
      

      