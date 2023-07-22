import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: fit-content;
  background: linear-gradient(146deg, #fff 20%, #d8f3dc 80%);
`;
export const Header = styled.div`
  padding: 20px;
  background: transparent;
  text-align: center;
  display: flex;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
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

/* export const link = styled.a`
  text-align: left;
  padding: 20px 40px 0 30px;
  color: var(--green-darker);
  font-size: var(--fnt-font-heading-5);
  margin-left: 20px;
  &:hover {
    text-shadow: 0 0 1px var(--green-darker);
  }
  &:active {
    font-weight: bold;
  }
`; */
