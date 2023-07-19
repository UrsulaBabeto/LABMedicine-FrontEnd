import { styled } from "styled-components";


export const Label = styled.label`
  color:${({$color}) => { return $color === 'danger' ? 'var(--message-error)' : 'var(--green-darker)'}};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: -350px;  
`;

export const Div = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  `
export const Input = styled.input`
  width:400px;
  height: 29px;
  background: transparent;
  margin-bottom: 10px;
  position: relative;
  outline: none;
  border: 0;
  box-shadow: inset 0 -2px 0 var(--green-darker);
  padding: 5px 40px 5px 2px;
  &:focus,
  &:active,
  &hover {
outline: none;
border: 0;
transition: all .4s ease;
box-shadow: inset 0 -2px 0 var(--green-dark);
  }
  &::placeholder {
    color:  ${({$color}) => { return $color === 'danger' ?'var(--message-error)' : 'var(--green-darker)'}};
    padding-left: 5px;
    font-size: 20px;
  }
`;

export const Icon = styled.span`
position: absolute;
bottom: 0;
right: 25rem;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
border: none;
color:${({$color}) => { return $color === 'danger' ? 'var(--message-error)' : 'var(--green-darker)'}};;
  background: transparent;
`;
