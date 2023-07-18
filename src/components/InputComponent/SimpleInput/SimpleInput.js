import { styled } from "styled-components";
import InputMask from 'react-input-mask';

export const Div = styled.div`
display: flex;
flex-direction: column;
width: 500px;
justify-content: center;
`

export const Label = styled.label`
font-size: var(--fnt-font-heading-5);
color: var( --green-darker) ;
`
export const Input = styled(InputMask)`
font-size: var(--fnt-font-paragraph);
color: var( --gray-darker) ;
 width: 70%; 
padding: 5px;
border: 1px solid var( --green-darker);
border-radius: 2px;
`
