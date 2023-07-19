import { useForm } from "react-hook-form";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";

import * as Styled from "../FormCadastroUsuario/FormCadastroStyled";

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
       <DateTimePicker
  label="Data da Consulta"
  value={value}
  onChange={(newValue) => setValue(newValue)}
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
