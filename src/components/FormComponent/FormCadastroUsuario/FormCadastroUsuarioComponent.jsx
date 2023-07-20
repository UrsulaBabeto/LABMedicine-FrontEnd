
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

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

function FormCadastroUsuario() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return ( 
    <>
    <Styled.Form>
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
        label="Confirmar Email"
        id="authEmail"
        type="email"
        {...register("email", { required: true })}
      />
         <SimpleInputComponent
            type={"password"}
            label={"Senha"}
            id={"password"}
            placeholder={"Digite sua senha"}
            register={{
              ...register("password", { required: true, minLength: 8 }),
            }}
            error={errors.password}
          />
             <SimpleInputComponent
            type={"password"}
            label={"Confirmar Senha"}
            id={"authPassword"}
            placeholder={"Digite sua senha"}
            register={{
              ...register("password", { required: true, minLength: 8 }),
            }}
            error={errors.password}
          />
         
</Styled.Form>
    </>
   );
}

export default FormCadastroUsuario;