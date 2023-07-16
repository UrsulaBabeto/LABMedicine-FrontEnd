import { styled } from "styled-components";

export const InputGroup = styled.div`
  width: 100%;
  height: 92px;
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

`;

export const Label = styled.label`
  color:${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#081c15'}};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  width: 100%;
  height: 29px;
  flex-shrink: 0;
  border-radius: 4px;
  border:1px solid;
  border-color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#081c15'}};
  background: transparent;
  margin-bottom: 0 auto;
  position: relative;
  &:focus,
  &:active,
  &hover {
    background-color: #f8f9fa;
    border: 1px solid #212529;
    font-size: 16px;
    padding-left: 5px;
  }

  &::placeholder {
    color: #212529;
    padding-left: 5px;
    font-size: 14px;
  }
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
color:${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#081c15'}};;
  background: transparent;
`;