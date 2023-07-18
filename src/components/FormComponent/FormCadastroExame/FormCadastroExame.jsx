import { useForm } from "react-hook-form";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";

import * as Styled from "../FormCadastroUsuario/FormCadastroStyled";

function FormCadastroConsulta() {
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

       {/*  data e hora ant.design timepicker */}

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
       <SimpleInputComponent
          label="URL Documento:"
          id="lab"
          type="url"       
        />
    
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

export default FormCadastroConsulta;
