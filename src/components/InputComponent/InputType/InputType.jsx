import * as React from "react";
import TextField from "@mui/material/TextField";
import { InputMask } from "react-input-mask";

import { styled } from "@mui/system";

export default function InputType({
  label,
  id,
  type,
  placeholder,
  mask,
  error,
  register,
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
    <InputMask mask={mask}>
      {() => (
        <StyledInput
          required
          {...register}
          mask={mask && mask}
          type={type}
          placeholder={placeholder}
          id={id}
          label={label}
          error={!!error}
          helperText={error && error.message}
          style={{
            borderColor: error ? red[500] : teal[900],
          }}
        />
      )}
    </InputMask>
  );
}
