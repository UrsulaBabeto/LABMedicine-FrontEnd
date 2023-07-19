import { styled } from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 550px;
  background: linear-gradient(146deg, #fff 20%, #d8f3dc 80%);
  height: 650px;
  text-align: center;
  padding-top: 90px;
`;
export const Form = styled.form`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  padding: 20px;
  background: transparent;
  margin: 0 auto;
  text-align: center;
`;


export const Title = styled.h2`
  color: var(--green-darker);
  font-family: Forum;
  font-size: var(--fnt-font-heading-2);
  padding-top: 20px;
`;

export const subtitle = styled.p`
  text-align: center;
  color: var(--green-darker);
  font-family: Forum;
  font-size: 20px;
`;

export const link = styled.a`
  text-align: left;
  padding: 20px 40px 0 0;
  flex-shrink: 0;
  color: var(--green-darker);
  font-family: Forum;
  font-size: 20px;
  font-style: normal;
  &:hover {
    text-shadow: 0 0 1px var(--green-darker);
  }
  &:active {
    font-weight: bold;
  }
`;
