import { styled } from "styled-components";
import InputMask from 'react-input-mask';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: var(--fnt-font-heading-4);
  color: var(--green-darker);
  color: ${({ $color }) => {
      return $color === "danger"
        ? "var(--message-error)"
        : "var(--green-darker)";
    }};
`;

export const Input = styled(InputMask)`
  font-size: var(--fnt-font-heading-4);
  color: var(--gray-darker);
  width: 80%;
  padding: 7px;
  border: 1px solid var(--green-darker);
  color: ${({ $color }) => {
      return $color === "danger"
        ? "var(--message-error)"
        : "var(--green-darker)";
    }};
  border-radius: 2px;

  &::placeholder {
    color: ${({ $color }) => {
      return $color === "danger"
        ? "var(--message-error)"
        : "var(--green-darker)";
    }};
    padding-left: 5px;
    font-size: var(--fnt-font-heading-5);
  }
`;
