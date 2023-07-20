import { styled } from "styled-components";

export const Label = styled.label`
  color: ${({ $color }) => {
    return $color === "danger" ? "var(--message-error)" : "var(--green-darker)";
  }};
`;

export const Input = styled.input`
position: relative;
  outline: none;
  border: none;
  padding: 5px 40px 5px 2px;
  box-shadow: inset 0 -2px 0 var(--gray-darker);
  background: transparent;
  margin-bottom: 20px;
  font-size: var(--fnt-font-heading-4);
  &:focus,
  &:active {
    outline: none;
    border: 0;
    transition: all 0.4s ease;
    box-shadow: inset 0 -2px var(--green-dark);
  }

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

export const Icon = styled.span`
  position: absolute;
  bottom: 5rem;
  right: 3rem;
  background: transparent;
  display: flex;
  font-size: var(--fnt-font-heading-5);
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ $color }) => {
    return $color === "danger" ? "var(--message-error)" : "var(--green-darker)";
  }};
  background: transparent;
`;
