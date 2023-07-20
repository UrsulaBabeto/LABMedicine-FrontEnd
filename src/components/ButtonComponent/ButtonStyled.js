import { styled } from "styled-components";

export const Button = styled.button`
  width: 80%;
  border-radius: 6px;
  font-size: 20px;
  background: var(--green-darker);
  color: var(--gray-lighter);
  margin: 30px auto;
  padding: 10px;
  opacity: ${({$active}) => { return $active ? 1 : .5 }};
  &:hover {
    font-weight: bold;
    box-shadow: 0 0 3px var(--gray-lighter);
  }
  &:active {
    background-color: var(--green-dark);
    color:var(--gray-lighter);
    font-weight: 400;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
