import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;

  flex-direction: column;
  margin-left: 10px;
`;
export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: inset 0 -2px 0 var(--gray-light);
  background: transparent;
  width: 900px;
  padding: 30px 10px;
`;
export const Div = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
margin-left: 10px;
  flex-wrap: wrap;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;
