import * as Styled from "./ButtonStyled"

function ButtonComponent({nome}) {
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