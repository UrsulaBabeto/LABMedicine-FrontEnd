import { styled } from "styled-components";

export const Button = styled.button`
  width: 304px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 6px;
  font-size: 20px;
  background: var(--green-darker);
  color: var(--gray-lighter);
  text-align: center;
  margin-top: 40px;
  opacity: ${({$active}) => { return $active ? 1 : .5 }};
  &:hover {
    font-weight: bold;
    box-shadow: 0 0 3pxvar(--gray-lighter);
  }
  &:active {
    background-color: var(--green-light);
    color:var(--gray-lighter);
    font-weight: 400;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
