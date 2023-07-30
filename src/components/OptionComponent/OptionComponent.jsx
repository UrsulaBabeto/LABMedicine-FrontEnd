import * as React from "react";
import PropTypes from "prop-types";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { styled } from "@mui/system";

function OptionComponent({
  name,
  value,
  value1,
  value2,
  value3,
  id,
  error,
  register,
}) {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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

  const StyledSelect = styled(Select)(
    ({ theme }) => ` 
    margin:10px;
    padding:0 50px;

    `
  );

  return (
    <>
      <InputLabel>{name}</InputLabel>
      <StyledSelect
        {...register}
        error={!!error}
        style={{
          borderColor: error ? red[500] : teal[900],
        }}
      >
        <MenuItem id={id} value={value}>
          {value}
        </MenuItem>
        <MenuItem id={id} value={value1}>
          {value1}
        </MenuItem>
        <MenuItem id={id} value={value2}>
          {value2}
        </MenuItem>
        <MenuItem id={id} value={value3}>
          {value3}
        </MenuItem>
      </StyledSelect>
    </>
  );
}
export default OptionComponent;

OptionComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.string,
  value3: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.any,
  register: PropTypes.any,
  };

