import * as Styled from './SimpleInput'


function SimpleInputComponent({ label, id, type, placeholder,mask  }) {
  return (
    <>
    <Styled.Div>
      <Styled.Label htmlFor="id">{label}</Styled.Label>
      <Styled.Input mask={mask && mask}type={type} placeholder={placeholder} id={id} />

      </Styled.Div>
    </>
  );
}

export default SimpleInputComponent;
