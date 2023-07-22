import { styled } from "styled-components";

export const Button = styled.button`
  width: 80%;
  border-radius: 6px;
  font-size: 20px;
  background: var(--green-darker);
  color: var(--gray-lighter);
  margin: 30px auto;
  padding: 10px;
  background: ${({ $disabled }) => ($disabled ? "transparent" : "var(--green-dark)")};
  border: ${({ $disabled }) => ($disabled ? "1px solid var(--green-dark)" : "0")};
  color: ${({ $disabled }) => ($disabled ? "var(--green-dark)" : "#EFEFEF")};
  opacity: ${({ $active, $disabled }) => ($disabled ? 0.5 : $active ? 1 : 0.5)};
  pointer-events: ${({ $disabled }) => ($disabled ? "not-allowed" : "auto")}; 
   &:hover {
    font-weight: bold;
    box-shadow: 0 0 3px var(--gray-lighter);
  }
  &:active {
    background-color: var(--green-light);
    color:var(--gray-lighter);
    font-weight: 400;
  }
  
`;
