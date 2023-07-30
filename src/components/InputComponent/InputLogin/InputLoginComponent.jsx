import { useState } from "react";
import PropTypes from "prop-types";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as Styled from "./InputLoginStyle";


function InputLoginComponent({ label, id, type, placeholder, register, error }) {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return (
      <>
        <Styled.Label $color={error && 'danger'} htmlFor={id}>{label} </Styled.Label>
  
        {type !== "textarea" && (
          <Styled.InputDiv>
            <Styled.Input
              type={showPassword ? "text" : type}
              id={id}
              placeholder={placeholder}
              {...register}
              $color={error && 'danger'}
            />
            {type === "password" && (
              <Styled.Icon onClick={handleShowPassword}  $color={error && 'danger'}>
                {!showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </Styled.Icon>
            )}
          </Styled.InputDiv>
        )}
  
        {type === "textarea" && (
          <Styled.TextArea id={id} placeholder={placeholder} {...register}  $color={error && 'danger'}/>
        )}
      </>
    );
  }
  

  export default InputLoginComponent;

  InputLoginComponent.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.any,
  register: PropTypes.any,
};
