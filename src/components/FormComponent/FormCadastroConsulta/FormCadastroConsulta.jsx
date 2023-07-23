import { useForm } from "react-hook-form";
import { useState } from "react";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";
import DateTime from "../../DatePickerComponent/DatePickerComponent";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import InputLoginComponent from "../../InputComponent/InputLogin/InputLoginComponent";

function FormCadastroConsulta() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertText, setAlertText] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitForm = async (data) => {
    const { motivo, descricao, medicacao, dose } = data;

    if (!isValid) {
      reset();
      setShowAlert(true);
      setAlertType("warning");
      setAlertText("Dados obrigatórios, tente novamente");
    } else {
      try {
        await service.Create(data);
        setShowAlert(true);
        setAlertType("success");
        setAlertText("Consulta criada com sucesso");
      } catch (error) {
        console.error(error);
      }
    }
  };

  /* let idPatient;
await service.Get().then((res) => {
  idPatient = res.find((u) => u.id === id);
});
!idPatient ? setShowAlert(true) : console.log(idPatient);
};
 */
  return (
    <>
      {showAlert && <AlertComponent type={alertType} text={alertText} />}
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
        <Styled.Buttons>
          <div>
            <SecondaryButtonComponent nome="Editar" />
          </div>
          <div>
            <SecondaryButtonComponent nome="Deletar" />
          </div>
        </Styled.Buttons>
        <SimpleInputComponent
          label="Motivo da consulta:"
          id="motivo"
          type="text"
          register={{
            ...register("motivo", {
              required: true,
              minLength: 6,
              maxLength: 60,
            }),
          }}
          error={errors.motivo}
        />

        <Styled.Div>
          <InputLoginComponent // Use the correct component import syntax
            label="Decrição do Problema"
            id="descricao"
            type="textarea"
            cols="90"
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
          <InputLoginComponent
            label="Dosagens e Precauções"
            id="dose"
            type="textarea"
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
        <div className="button">
          <ButtonComponent type="submit" nome={"Salvar"} />
        </div>
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
