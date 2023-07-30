import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import  ApiService  from "../../../service/ApiService/ApiService";

import DateTime from "../../DatePickerComponent/DatePickerComponent";
import InputType from "../../InputComponent/InputType/InputType";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import SearchComponent from "../../SearchComponent/SearchComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";

function FormCadastroExame() {
  const [exame, setExame] = useState();
  const service = new ApiService("exames");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitForm = async (data) => {
    console.log(data);
    exame ? await edit(data) : await save(data);
  };

  const save = async (data) => {
    if (!isValid) {
      alert("Erro, tente novamente");
    } else {
      await service
        .Create(data)
        .then((response) =>
          alert(`Exame ${response.nomeExame} criado com sucesso.`)
        );
      reset();
    }
  };

  const edit = async (data) => {
    const body = {
      ...exame,
      ...data,
    };
    await service
      .Update(exame.id, data)
      .then((response) =>
        alert(`Exame ${response.nomeExame} atualizado com sucesso.`)
      );
    reset();
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const fnc = async () => {
      await service.Show(id).then((res) => {
        setExame(res);
        Object.entries(res).map(([key, value]) => {
          setValue(key, value);
        });
      });
    };
  }, []);

  return (
    <>
      <Styled.Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <SearchComponent />
        </div>
        {/*        <Styled.FormG>
          
          <div>
            <SecondaryButtonComponent
              nome="Deletar"
              type="submit"
              onclick={handleDelete}
            />
          </div>
        </Styled.FormG> */}
        <Styled.FormG>
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
        </Styled.FormG>
        <Styled.Div>
          {exame ? (
            <ButtonComponent type="button" nome={"Editar"} onclick={edit} />
          ) : (
            <ButtonComponent type="submit" nome={"Salvar"} />
          )}
        </Styled.Div>
      </Styled.Form>
    </>
  );
}

export default FormCadastroExame;

