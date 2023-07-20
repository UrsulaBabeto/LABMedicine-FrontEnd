import { useForm } from "react-hook-form";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";

import * as Styled from "../FormCadastroUsuario/FormCadastroStyled";
import DatePicker from "../../DatePickerComponent/DatePickerComponent";

function FormCadastroConsulta() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Styled.Form>
        <SimpleInputComponent
          label="Motivo da consulta:"
          id="motivo"
          type="text"
          {...register("motivo", {
            required: true,
            minLength: 6,
            maxLength: 60,
          })}
        />
        <DatePicker/>
        <SimpleInputComponent
          label="Data da Consulta"
          id="consulta"
          type="datetime"
          {...register("consulta", { required: true })}
        />
        <Styled.Div>
          <Styled.Label htmlFor="">Decrição do Problema</Styled.Label>
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

export default FormCadastroConsulta;

/* 
Deve conter uma busca de paciente e um
formulário para cadastro de consulta com botões editar, deletar e salvar.
a. Durante o cadastro, os botões de editar e deletar devem ficar desativados
(desabilitados).
c. Deverá verificar os dados informados antes de cadastrar.
d. Deverá criar um identificador único para cada consulta cadastrada.
e. Deverá apresentar animação ao salvar. */