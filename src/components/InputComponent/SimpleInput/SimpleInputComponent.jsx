import * as Styled from './SimpleInput'


function SimpleInputComponent({ label, id, type, placeholder,mask,error, register  }) {
  return (
    <>
    <Styled.Div>
      <Styled.Label  $color={error && 'danger'} htmlFor="id">{label}</Styled.Label>
      <Styled.Input  $color={error && 'danger'} {...register} mask={mask && mask}type={type} placeholder={placeholder} id={id} 
      />

      </Styled.Div>
    </>
  );
}

export default SimpleInputComponent;
