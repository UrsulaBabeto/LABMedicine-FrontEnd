import * as Styled from './SimpleInput'


function SimpleInputComponent({ label, id, type, placeholder,mask,error  }) {
  return (
    <>
    <Styled.Div>
      <Styled.Label  $color={error && 'danger'} htmlFor="id">{label}</Styled.Label>
      <Styled.Input  $color={error && 'danger'} mask={mask && mask}type={type} placeholder={placeholder} id={id} 
      />

      </Styled.Div>
    </>
  );
}

export default SimpleInputComponent;
