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

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import InputType from "../../InputComponent/InputType/InputType"

function FormCadastroUsuario() {
  const service = new ApiService("users");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitForm = async (data) => {
    const { name, email, password } = data;
    console.log(data);
    if (!isValid) {
      alert("Erro, tente novamente");
     ;
    } else {
      try {
        await service.Create(data);
        console.log(JSON.stringify(data))
        reset()
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
  
      <Styled.Form noValidate onSubmit={handleSubmit(onSubmitForm)}>

        <InputType  
        id="name"
          label="Nome Completo"
          type="name"
          register={{
            ...register("name", { required: true, minLength: 5, maxLength: 50}),
          }}
          error={errors.name}
          />
        <InputType  
        id="email"
          label="Email"
          type="email"
          register={{
            ...register("email", { required: true, minLength: 5, maxLength: 50  }),
          }}
          error={errors.email}/>
        <InputType  
        id="password"
          label="Senha"
          type="password"
          register={{
            ...register("password", { required: true, minLength: 8 }),
          }}
          error={errors.password}
          />
   
        <ButtonComponent type="submit" nome="Cadastrar" />
      </Styled.Form>
    </>
  );
}

export default FormCadastroUsuario;
