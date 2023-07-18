import * as Styled from './SimpleInput'

function SimpleInputComponent({ label, id, type, placeholder }) {
  return (
    <>
    <Styled.Div>
      <Styled.Label htmlFor="id">{label}</Styled.Label>
      <Styled.Input type={type} placeholder={placeholder} id={id} />
      </Styled.Div>
    </>
  );
}

export default SimpleInputComponent;
