import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../../service/ApiService/ApiService";

import DateTime from "../../DatePickerComponent/DatePickerComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
import InputType from "../../InputComponent/InputType/InputType";
import SearchComponent from "../../SearchComponent/SearchComponent";

import * as Styled from "../FormCadastroPaciente/FormCadastroStyled";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";

function FormCadastroConsulta() {
  const [consulta, setConsulta] = useState();
  const service = new ApiService("consultas");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitForm = async (data) => {
    console.log(data);
    consulta ? await edit(data) : await save(data);

    if (!consulta) {
      alert("Consulta não encontrada");
      return;
    } else {
      console.log("Passou");
    }
  };

  const save = async (data) => {
    if (!isValid) {
      alert("Erro, tente novamente");
    } else {
      await service
        .Create(data)
        .then((response) =>
          alert(`Consulta ${response.motivo} criado com sucesso.`)
        );
      reset();
    }
  };

  const edit = async (data) => {
    const body = {
      ...consulta,
      ...data,
    };
    await service
      .Update(consulta.id, body)
      .then((response) =>
        alert(`Consulta ${response.motivo} atualizado com sucesso.`)
      );
    reset();
    console.log(body);
  };

  const del = async (data) => {
    await service.Delete(consulta.data)}

  const { pathname } = useLocation();

  useEffect(() => {
    const fnc = async () => {
      await service.Show(id).then((res) => {
        setConsulta(res);
        Object.entries(res).map(([key, value]) => {
          setValue(key, value);
        });
      });
    };

    const path = pathname.split("/");
    const id = path[path.length - 1];
    !isNaN(Number(id)) && fnc();
  }, []);

  return (
    <>
      <div>
        {" "}
        <Styled.Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <h3>Utilize a barra de pesquisa para buscar</h3>
            <SearchComponent />
          </div>

          <Styled.FormG>
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
                error={errors.motivo}
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
                  error={errors.descricao}
                />
              </Styled.Div>
              <InputType
                label="Medicação Receitada:"
                id="medicacao"
                type="text"
                register={{
                  ...register("medicacao", { minLength: 8 }),
                }}
                error={errors.medicacao}
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
                  error={errors.dose}
                />
              </Styled.Div>
              <DateTime />
            </Styled.Div>
          </Styled.FormG>

          <Styled.Div>
            {consulta ? (
              <ButtonComponent type="button" nome={"Editar"} onclick={edit} />
            ) : (
              <ButtonComponent type="submit" nome={"Salvar"} />
            )}
            <div>
              <SecondaryButtonComponent
                nome="Deletar"
                type="button"
                onclick={del}
                disabled={!consulta}
              />
            </div>
          </Styled.Div>
        </Styled.Form>
      </div>
    </>
  );
}

export default FormCadastroConsulta;
