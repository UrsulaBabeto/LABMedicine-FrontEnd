import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: inset 0 -2px 0 var(--gray-light);
  background: transparent;
  padding: 30px 10px;
  margin-top: 10px;
  margin-left: 60px;
`;
export const Div = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 10px;
  flex-wrap: wrap;
`;
