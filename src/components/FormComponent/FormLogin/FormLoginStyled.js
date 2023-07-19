import { styled } from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 500px;
  background: linear-gradient(146deg, #fff  20%, #D8F3DC 80%);
  margin: 0 auto;
  
`;
export const Header = styled.div`
  width: 100%;
  padding: 20px;
  background: transparent;
  margin: 0 auto;
  text-align: center;
`;
export const InputGroup = styled.div`
  width: 80%;
  height: 92px;
  margin: 0 auto;
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
  font-size: var(--fnt-font-paragraph);

`;

export const link = styled.a`
  text-align: left;
  padding: 20px 40px 0 30px;
  color: var(--green-darker);
  font-size: var(--fnt-font-paragraph);
margin-left: 20px;
  &:hover {
    text-shadow: 0 0 1px var(--green-darker);
  }
  &:active {
    font-weight: bold;
  }
`;