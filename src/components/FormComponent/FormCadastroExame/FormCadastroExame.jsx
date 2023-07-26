import { useForm } from "react-hook-form";
import { useState } from "react";

import DateTime from "../../DatePickerComponent/DatePickerComponent";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";
import InputType from "../../InputComponent/InputType/InputType";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import SearchComponent from "../../SearchComponent/SearchComponent";

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
      return alert("Dados obrigatórios, tente novamente");
    } else {
      await service.Create(data);
      return alert('Exame cadastrado com sucesso');
    }
  };

  const handleEdit =async(id,data)=>{
    try {
       await service.Update(data)
    } catch (error) {
      console.error(error);
    }
   }
   
   const handleDelete =async(id)=>{
  try {
    await service.Delete(id).then((res) => {
      user = res.find((u) => u.id === id);
    });
    } catch (error) {
      console.error(error);
    }
   }
    return (
      <>
        <Styled.Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <div>
       <SearchComponent/>  
        </div>
          <Styled.FormGroup>
            <div>
              <SecondaryButtonComponent nome="Editar" type="submit" onclick={handleEdit} />
            </div>
            <div>
              <SecondaryButtonComponent nome="Deletar" type="submit" onclick={handleDelete} />
            </div>
          </Styled.FormGroup>
        <Styled.FormGroup>
          <h2>Dados</h2>
          <Styled.Div>
            <InputType
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

            <InputType
              label="Tipo do Exame:"
              id="tipoExame"
              type="text"
              register={{
                ...register("tipoExame", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                }),
              }}
              error={errors.tipoExame}
            />
            <InputType
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
            <InputType
              label="URL Documento:"
              id="url"
              type="url"
              register={{
                ...register("url", {
                  minLength: 5,
                }),
              }}
              error={errors.url}
            />

            <TextareaComponent
              placeholder={"Resultados"}
              id="descricao"
              register={{
                ...register("descricao", {
                  required: true,
                  minLength: 15,
                  maxLength: 1000,
                }),
              }}
              error={errors.descricao}
            />

            <InputType
              label="Medicação Receitada:"
              id="medicacao"
              type="text"
              register={{
                ...register("medicacao", {
                  minLength: 8,
                }),
              }}
              error={errors.medicacao}
            />

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
              error={errors.dose}
            />
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

export default FormCadastroExame;

/* 
Deve conter uma busca de paciente e um formulário
para cadastro de consulta com botões editar, deletar e salvar.
a. Durante o cadastro, os botões de editar e deletar devem ficar desativados
(desabilitados).
c. Deverá verificar os dados informados antes de cadastrar.
d. Deverá criar um identificador único para cada exame cadastrado.
e. Deverá apresentar animação ao salvar. */
