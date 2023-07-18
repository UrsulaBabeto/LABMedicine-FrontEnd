import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as Styled from "./FormLoginStyled";

import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import ModalCriarUsuario from "../../ModalCriarUsuario/ModalCriarUsuario";
import InputLoginComponent from "../../InputComponent/InputLogin/InputLoginComponent";

function FormLoginComponent() {
  /*  const users = [
    {
      id: 1,
      email: "email@email.com",
      password: "asdfg123",
    },
  ];*/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    const { email, password } = data;

    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("Usuário não cadastrado");
      return;
    }

    password === user.password
      ? redirectToHome()
      : alert("Ops! Usuário e/ou Senha Invalidos.");
  };
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home");
  };
  return (
    <>
    <div>
    <p>ainda não ppssui uma conta? </p>
      <ModalCriarUsuario />
      </div>
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
        <Styled.Header>
          <Styled.Title>LOGIN</Styled.Title>
          <Styled.subtitle>
            Para acessar digite o seu e-mail e senha
          </Styled.subtitle>
        </Styled.Header>
        <Styled.InputGroup>
          <InputLoginComponent
            type={"email"}
            label={"Email"}
            id={"email"}
            placeholder={"email@email.com"}
            register={{
              ...register("email", {
                required: true,
                validate: {
                  matchPath: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                },
              }),
            }}
            error={errors.email}
          />
          <InputLoginComponent
            type={"password"}
            label={"Senha"}
            id={"password"}
            placeholder={"Digite sua senha"}
            register={{
              ...register("password", { required: true, minLength: 8 }),
            }}
            error={errors.password}
          />
          {/* 
          {errors.password && <span>This field is required</span>} */}
        </Styled.InputGroup>
        <ButtonComponent nome="Acessar" />

        <div className="action">
          <Styled.link type="button">Esqueci minha senha</Styled.link>
        </div>
      </Styled.Form>
    </>
  );
}

export default FormLoginComponent;
