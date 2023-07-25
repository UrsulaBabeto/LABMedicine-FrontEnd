import { useForm } from "react-hook-form";
import { useState } from "react";

import DateTime from "../../DatePickerComponent/DatePickerComponent";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
import InputType from "../../InputComponent/InputType/InputType";
import SearchComponent from "../../SearchComponent/SearchComponent";

function FormCadastroConsulta() {
  const [showAlert, setShowAlert] = useState(false);

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
      return alert("Dados obrigatórios, tente novamente");
    } else {
      try {
        await service.Create(data);
        return alert("Consulta cadastrada com sucesso");
      } catch (error) {
        console.error("erro");
      }
    }
  };

  const handleEdit = async (id, data) => {
    try {
      await service.Update(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await service.Delete(id).then((res) => {
        user = res.find((u) => u.id === id);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Styled.Form  noValidate  onSubmit={handleSubmit(onSubmitForm)}>
        <div>
        <SearchComponent />
        </div>
        <Styled.FormGroup>
          <div>
            <SecondaryButtonComponent
              nome="Editar"
              type="submit"
              onclick={handleEdit}
            />
          </div>
          <div>
            <SecondaryButtonComponent
              nome="Deletar"
              type="submit"
              onclick={handleDelete}
            />
          </div>
        </Styled.FormGroup>
        <Styled.FormGroup>
          <h2>Dados</h2>
          <Styled.Div>
            <InputType
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
              errors={error.motivo}
            />

            <Styled.Div>
              <TextareaComponent
                placeholder={"Decrição do Problema"}
                id="descricao"
                register={{
                  ...register("descricao", {
                    required: true,
                    minLength: 15,
                    maxLength: 1000,
                  }),
                }}
              />
            </Styled.Div>
            <InputType
              label="Medicação Receitada:"
              id="medicacao"
              type="text"
              register={{
                ...register("medicacao", { minLength: 8 }),
              }}
            />

            <Styled.Div>
              <TextareaComponent
                placeholder={"Dosagens e Precauções"}
                id="dose"
                register={{
                  ...register("dose", {
                    required: true,
                    minLength: 15,
                    maxLength: 250,
                  }),
                }}
              />
            </Styled.Div>
            <DateTime />
          </Styled.Div>
        </Styled.FormGroup>

        <Styled.Div>
          <ButtonComponent type="submit" nome={"Salvar"} />
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
