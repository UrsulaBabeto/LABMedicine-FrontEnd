import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as Styled from "./FormLoginStyled";

import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import ModalCriarUsuario from "../../ModalCriarUsuario/ModalCriarUsuario";
import InputLoginComponent from "../../InputComponent/InputLogin/InputLoginComponent";

import '../../ButtonComponent/ButtonComponent.css'

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
<Styled.Div>
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="d-flex">
    <p>ainda não possui uma conta? </p>
      <ModalCriarUsuario />
      </div>
        <Styled.Header>
          <Styled.Title>LOGIN</Styled.Title>
          <Styled.subtitle>
            Para acessar digite o seu e-mail e senha
          </Styled.subtitle>
        </Styled.Header>

          <InputLoginComponent
            type={"email"}
            label={"Email"}
            id={"email"}
            placeholder={"Digite seu email"}
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
      
        <ButtonComponent className="button" nome="Acessar" />

        <div className="action">
          <p>Esqueci minha senha, <Styled.link>clique aqui</Styled.link></p>
        </div>
      </Styled.Form>
      </Styled.Div>   
    </>
  );
}

export default FormLoginComponent;
