/*
Deve conter um formulário para cadastro de
paciente com botões para editar, deletar e salvar.
a. Durante o cadastro, os botões de editar e deletar devem ficar desativados
(desabilitados).
c. Deverá utilizar a API do ViaCEP para buscar os dados de endereço.
d. Deverá verificar os dados informados antes de cadastrar.
e. Deverá criar um identificador único para cada paciente cadastrado.
f. Deverá apresentar animação ao salvar. */

import { useForm } from "react-hook-form";
import { ApiService } from "../../../service/ApiService/ApiService";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";

function FormCadastroUsuario() {
  const service = new ApiService("users");
     /*    await service.Get().then((res) => {
      let user = res.find((u) => u.email === email);
      if(!user){
        delete data.authPassword

      }
    }); */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitForm = async (data) => {
    const { name, email, authEmail, password, authPassword } = data;

    if (!isValid) {
      reset();
      return (
        <AlertComponent
          type="warning"
          text="Dados obrigatórios, tente novamente"
        />
      );
    } else {
      try {
    delete
        await service.Create(data);

        <AlertComponent type="success" text="Usuario criado com sucesso" />;
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div>ButtonComponent</div>
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
        <SimpleInputComponent
          label="Nome Completo"
          id="name"
          type="text"
          {...register("name", { required: true, minLength: 5, maxLength: 50 })}
        />
        <SimpleInputComponent
          label="Email"
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
        <SimpleInputComponent
          type={"password"}
          label={"Senha"}
          id={"password"}
          placeholder={""}
          register={{
            ...register("password", { required: true, minLength: 8 }),
          }}
          error={errors.password}
        />
        <SimpleInputComponent
          type={"password"}
          label={"Confirmar Senha"}
          id={"authPassword"}
          placeholder={""}
          register={{
            ...register("authPassword", { required: true, minLength: 8 }),
          }}
          error={errors.password}
        />
      </Styled.Form>
    </>
  );
}

export default FormCadastroUsuario;
