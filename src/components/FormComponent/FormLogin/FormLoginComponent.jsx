import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../service/ApiService/ApiService";

import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import ModalCriarUsuario from "../../ModalCriarUsuario/ModalCriarUsuario";
import InputLoginComponent from "../../InputComponent/InputLogin/InputLoginComponent";
import AlertComponent from "../../AlertComponent/AlertComponent";

import * as Styled from "./FormLoginStyled";

function FormLoginComponent() {
  const service = new ApiService("users");
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (data) => {
    const { email, password } = data;

    let user;
    await service.Get().then((res) => {
      user = res.find((u) => u.email === email);
    });

    if (!user) {
      reset();
      <AlertComponent type={"error"} text="Usuario não cadastrado"/>;
      return;
    }

    password === user.password
      ? redirectToHome()
      : <AlertComponent type={"error"} text="Ops! Usuário e/ou Senha Invalidos."/>;
  };
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <span>ainda não possui uma conta? </span>
          <ModalCriarUsuario />
        </div>
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
            placeholder={"Digite seu e-mail"}
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
          <ButtonComponent nome="Acessar" />
          <AlertComponent type={"error"} text={"Em Construção"}/>
        </Styled.InputGroup>
      </Styled.Form>
    </>
  );
}

export default FormLoginComponent;
