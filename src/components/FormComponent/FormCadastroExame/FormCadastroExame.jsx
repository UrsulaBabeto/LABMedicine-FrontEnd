import { useForm } from "react-hook-form";
import { useState } from "react";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";
import DateTime from "../../DatePickerComponent/DatePickerComponent";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";

function FormCadastroExame() {
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (data) => {
    const { nomeExame, tipoExame, lab, descricao, medicacao, dose } = data;

    if (!data) {
      reset();
      return (
        <AlertComponent
          type="warning"
          text="Dados obrigatórios, tente novamente"
        />
      );
    } else {
      await service.Create(data);
      return (
        <AlertComponent type="success" text="Exame criado com sucesso" />
      );
    }
  };
  return (
    <>
      {showAlert && (
        <AlertComponent type={"error"} text="Documento não encontrado" />
      )}
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
        <Styled.Div>
          <Styled.Buttons>
            <div>
              <SecondaryButtonComponent nome="Editar" />
            </div>
            <div>
              <SecondaryButtonComponent nome="Deletar" />
            </div>
          </Styled.Buttons>
        </Styled.Div>
        <SimpleInputComponent
          label="Nome do Exame:"
          id="nomeExame"
          type="text"
          register={{
            ...register("nomeExame", {
              required: true,
              minLength: 5,
              maxLength: 50,
            }),
          }}
          error={errors.nomeExame}
        />

        <SimpleInputComponent
          label="Tipo do Exame:"
          id="tipoExame"
          type="text"
          register={{
            ...register("tipoExame", {
              required: true,
              minLength: 5,
              maxLength: 30,
            }),
          }}
          error={errors.tipoExame}
        />
        <SimpleInputComponent
          label="Laboratório:"
          id="lab"
          type="text"
          register={{
            ...register("lab", {
              required: true,
              minLength: 5,
              maxLength: 30,
            }),
          }}
          error={errors.lab}
        />
        <SimpleInputComponent
          label="URL Documento:"
          id="lab"
          type="url"
          register={{
            ...register("lab", {
              minLength: 5,
            }),
          }}
        />

        <Styled.Div>
          <Styled.Label htmlFor="">Resultados:</Styled.Label>
          <Styled.TextArea
            id="descricao"
            cols="30"
            rows="4"
            register={{
              ...register("descricao", {
                required: true,
                minLength: 15,
                maxLength: 1000,
              }),
            }}
            error={errors.descricao}
          />
        </Styled.Div>
        <SimpleInputComponent
          label="Medicação Receitada:"
          id="medicacao"
          type="text"
          register={{
            ...register("medicacao", { minLength: 8 }),
          }}
        />
        <Styled.Div>
          <Styled.Label htmlFor="">Dosagens e Precauções</Styled.Label>
          <Styled.TextArea
            id="dose"
            cols="90"
            rows="4"
            register={{
              ...register("dose", {
                required: true,
                minLength: 15,
                maxLength: 250,
              }),
            }}
            error={errors.dose}
          />
        </Styled.Div>
        <DateTime />
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
