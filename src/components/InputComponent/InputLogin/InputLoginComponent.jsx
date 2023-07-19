import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as Styled from "./InputLoginStyle";

function InputLoginComponent({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
        <Styled.Label $color={error && "danger"} htmlFor={id}>
          {label}{" "}
        </Styled.Label>

      <Styled.Div>
        {type !== "textarea" && (
          <div>
            <Styled.Input
              type={showPassword ? "text" : type}
              id={id}
              placeholder={placeholder}
              {...register}
              $color={error && "danger"}
            />
            {type === "password" && (
              <Styled.Icon
                onClick={handleShowPassword}
                $color={error && "danger"}
              >
                {!showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </Styled.Icon>
            )}
          </div>
        )}

        {type === "textarea" && (
          <Styled.TextArea
            id={id}
            placeholder={placeholder}
            {...register}
            $color={error && "danger"}
          />
        )}
      </Styled.Div>
    </>
  );
}

export default InputLoginComponent;
