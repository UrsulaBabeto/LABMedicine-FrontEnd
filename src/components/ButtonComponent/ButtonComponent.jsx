import * as Styled from "./ButtonStyled"
import { useForm } from "react-hook-form";

function ButtonComponent({nome}) {

  const {
    formState: { errors },
  } = useForm();

    return ( <>
        <Styled.Button
          $active={!errors.password && !errors.email}
          type="submit"
          disabled={errors.email || errors.password}
        >
          {nome}
        </Styled.Button>
</> );
}

export default ButtonComponent;