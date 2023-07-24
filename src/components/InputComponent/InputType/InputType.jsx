import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputType({
  label,
  id,
  type,
  placeholder,
  mask,
  error,
  register,
}) {
  return (
    
      <TextField
        required
        $color={error && "danger"}
        {...register}
        mask={mask && mask}
        type={type}
        placeholder={placeholder}
        id={id}
        label={label}
      />
   
  );
}
