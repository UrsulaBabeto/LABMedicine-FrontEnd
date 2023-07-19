import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import './ButtonComponent.css'

function ButtonComponent({ nome }) {
  const {
    formState: { errors },
  } = useForm();

  return (
    <>
  
      <Button
          className="button custom-button"
        variant="contained"
        $active={!errors.password && !errors.email}
        type="submit"
        disabled={errors.email || errors.password}
      >
        {nome}
      </Button>
    </>
  );
}

export default ButtonComponent;
