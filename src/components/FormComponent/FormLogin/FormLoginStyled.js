import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 600px;
  background: linear-gradient(146deg, #fff 20%, #d8f3dc 80%);
  min-width: 450px;
`;
export const Header = styled.div`
  padding: 20px;
  background: transparent;
  text-align: center;

`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
gap: 5px;

`;
export const Title = styled.h2`
  color: var(--green-darker);
  font-size: var(--fnt-font-heading-2);
  padding-top: 20px;
`;

export const subtitle = styled.p`
  text-align: center;
  color: var(--green-darker);
  font-size: var(--fnt-font-heading-5);
`;


