import { styled } from "styled-components";


export const Label = styled.label`
  color:${({$color}) => { return $color === 'danger' ? 'var(--message-error)' : 'var(--green-darker)'}};
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
  padding: 7px;
  border:1px solid;
  border-color: ${({$color}) => { return $color === 'danger' ?'var(--message-error)' : 'var(--green-darker)'}};
  background: transparent;
  margin-bottom: 0 auto;
  position: relative;
  &:focus,
  &:active,
  &hover {
    background-color: var(--gray-lighter);
    border: 1px solid var(--gray-darker);
    font-size: 16px;
    padding-left: 5px;
  }

  &::placeholder {
    color: var(--gray-darker);
    padding-left: 5px;
    font-size: 14px;
  }
`;

export const Icon = styled.span`
position: absolute;
bottom: 0;
left: 25rem;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
border: none;
color:${({$color}) => { return $color === 'danger' ? 'var(--message-error)' : 'var(--green-darker)'}};;
  background: transparent;
`;
