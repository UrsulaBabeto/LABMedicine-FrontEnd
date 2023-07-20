import { useForm } from "react-hook-form";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";
import DateTime from "../../DatePickerComponent/DatePickerComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";


function FormCadastroExame() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Styled.Form>
        <SimpleInputComponent
          label="Nome do Exame:"
          id="nomeExame"
          type="text"
          {...register("motivo", {
            required: true,
            minLength: 5,
            maxLength: 50,
          })}
        />

        <DateTime />

        <SimpleInputComponent
          label="Tipo do Exame:"
          id="tipoExame"
          type="text"
          {...register("motivo", {
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
        />
        <SimpleInputComponent
          label="Laboratório:"
          id="lab"
          type="text"
          {...register("motivo", {
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
        />
        <SimpleInputComponent label="URL Documento:" id="lab" type="url" />

        <Styled.Div>
          <Styled.Label htmlFor="">Resultados:</Styled.Label>
          <Styled.TextArea
            id="descricao"
            cols="30"
            rows="4"
            {...register("motivo", {
              required: true,
              minLength: 15,
              maxLength: 1000,
            })}
          />
        </Styled.Div>
        <SimpleInputComponent
          label="Medicação Receitada:"
          id="medicacao"
          type="text"
        />
        <Styled.Div>
          <Styled.Label htmlFor="">Dosagens e Precauções</Styled.Label>
          <Styled.TextArea
            id="dose"
            cols="30"
            rows="4"
            {...register("motivo", {
              required: true,
              minLength: 15,
              maxLength: 250,
            })}
          />
        </Styled.Div>
      </Styled.Form>
    </>
  );
}

export default FormCadastroExame;

/* 
Deve conter uma busca de paciente e um formulário
para cadastro de consulta com botões editar, deletar e salvar.
a. Durante o cadastro, os botões de editar e deletar devem ficar desativados
(desabilitados).
c. Deverá verificar os dados informados antes de cadastrar.
d. Deverá criar um identificador único para cada exame cadastrado.
e. Deverá apresentar animação ao salvar. */
