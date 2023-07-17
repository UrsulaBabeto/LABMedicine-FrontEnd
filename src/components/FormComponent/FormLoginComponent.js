import { styled } from "styled-components";

export const Form = styled.form`
  width: 550px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--green-lighter);
  margin: 0 auto;
  display: flex;

  align-items: center;
  flex-direction: column;
`;
export const Header = styled.div`
  width: 100%;
  padding: 20px;
  background: transparent;
  margin: 0 auto;
  text-align: center;
`;
export const InputGroup = styled.div`
  width: 100%;
  height: 92px;
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

`;

export const Title = styled.h2`
  color: var(--green-darker);
  font-family: Forum;
  font-size: var(--fnt-font-heading-2);
  padding-top: 20px;
`;

export const subtitle = styled.p`
  text-align: center;
  padding: 10px;
  flex-shrink: 0;
  color: var(--green-darker);
  font-family: Forum;
  font-size: var(--fnt-font-paragraph);

`;
export const Icon = styled.span`
position: absolute;
bottom: 15.8em;
right: 13rem;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
border: none;
color:${({$color}) => { return $color === 'danger' ? 'var(--message-error)' : 'var(--green-darker)'}};;
  background: transparent;
`;
export const link = styled.a`
  text-align: left;
  padding: 0 20px 0 0;
  flex-shrink: 0;
  color: var(--green-darker);
  font-family: Forum;
  font-size: var(--fnt-font-paragraph);
  font-style: normal;
  margin-left: -5px;
  &:hover {
    text-shadow: 0 0 1px var(--green-darker);
  }
  &:active {
    font-weight: bold;
  }
`;
