import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../../service/ApiService/ApiService";

import OptionComponent from "../../OptionComponent/OptionComponent";
import InputType from "../../InputComponent/InputType/InputType";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import SearchComponent from "../../SearchComponent/SearchComponent";

import * as Styled from "./FormCadastroStyled";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";

function FormCadastroPacienteComponent() {
  const serviceAPIVIACEP = new ApiService("pacientes");
  const [paciente, setPaciente] = useState();
  const [endereco, setEndereco] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitForm = async (data) => {
    console.log(data);
    paciente ? await edit(data) : await save(data);
  };
  const save = async (data) => {
    if (!isValid) {
      alert("Erro, tente novamente");
    } else {
      await service
        .Create(data)
        .then((response) =>
          alert(`Paciente ${response.name} criado com sucesso.`)
        );
      reset();
    }
  };

  const edit = async (data) => {
    const body = {
      ...paciente,
      ...data,
    };
    await service
      .Update(paciente.id, data)
      .then((response) =>
        alert(`Paciente ${response.name} atualizado com sucesso.`)
      );
    reset();
  };

  /*   const del = async (data) => {
    await service
      .Delete(exame.id, data)
      .then((response) =>
        alert(`Exame ${response.nomeExame} excluido com sucesso.`)
      );
    reset();
  }; */

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

/*   const handleAddress = async (cep) => {
    try {
      await serviceAPIVIACEP
        .GetCEP()
        .then(setEndereco(data))
        .then(
          setValue("cidade", data.localidade),
          setValue("estado", data.uf),
          setValue("logradouro", data.logradouro),
          setValue("bairro", data.bairro)
        );
    } catch (error) {
      console.error(error);
    }
  }; */

  return (
    <>
      <div>
        <div>
          <h3>Utilize a barra de pesquisa para buscar</h3>
          <SearchComponent />
        </div>
        <Styled.Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
          <Styled.FormG>
            <h2>Idetificação</h2>

            <Styled.Div>
              <InputType
                id="name"
                label="Nome Completo"
                type="name"
                register={{
                  ...register("name", {
                    required: true,
                    minLength: 5,
                    maxLength: 50,
                  }),
                }}
                error={errors.name}
              />

              <OptionComponent
                id="genero"
                name="genero"
                value="Cisgenero"
                value1="Transgenero"
                value2="Prefiro não declarar"
                register={register("genero", {})}
                error={errors.genero}
              />

              <OptionComponent
                id="sexo"
                name="sexo"
                value="Feminino"
                value1="Masculino"
                value2="Prefiro não declarar"
                register={register("sexo", {})}
                error={errors.sexo}
              />

              <InputType
                id="dataNasc"
                type="date"
                register={{
                  ...register("dataNasc"),
                }}
                error={errors.dataNasc}
              />
              <InputType
                mask={"000.000.000-00"}
                label="CPF"
                id="cpf"
                type="text"
                register={{
                  ...register("cpf", { required: true }),
                }}
                error={errors.cpf}
              />

              <InputType
                label="Email"
                id="email"
                type="email"
                register={{
                  ...register("email", { required: true }),
                }}
                error={errors.email}
              />

              <InputType
                mask={"(00) 0 0000-0000"}
                label="Telefone"
                id="tel"
                type="text"
                register={{
                  ...register("tel", { required: true }),
                }}
                error={errors.tel}
              />

              <OptionComponent
                id="estadoCivil"
                name="Estado Civil"
                value="Solteiro(a)"
                value1="Casado(a)"
                value2="Viuvo(a)"
                value3="Divorciado(a)"
                register={{ ...register("estadoCivil") }}
                error={errors.estadoCivil}
              />

              <InputType
                label="Naturalidade"
                id="naturalidade"
                type="text"
                register={{
                  ...register("naturalidade", {
                    required: true,
                    minLength: 5,
                    maxLength: 50,
                  }),
                }}
                error={errors.naturalidade}
              />
            </Styled.Div>
          </Styled.FormG>

          <Styled.FormG>
            <h2>Dados Medicos</h2>
            <Styled.Div>
              <InputType
                mask="(99) 9 9999-9999"
                label="Contato de Emergência"
                id="emergencia"
                type="text"
                register={{
                  ...register("emergencia", { required: true }),
                }}
                error={errors.emergencia}
              />

              <TextareaComponent
                placeholder={"Alergias"}
                id="alergias"
                register={{ ...register("alergias") }}
                error={errors.alergias}
              />

              <TextareaComponent
                placeholder={"Lista de Cuidados Específicos"}
                id="cuidados"
                register={{ ...register("cuidados") }}
                error={errors.cuidados}
              />
            </Styled.Div>
          </Styled.FormG>

          <Styled.FormG>
            <h2>Convenio</h2>
            <Styled.Div>
              <InputType
                label="Convenio"
                id="convenio"
                type="text"
                register={{
                  ...register("convenio"),
                }}
                error={errors.convenio}
              />
              <InputType
                label="Nº Convenio"
                id="numConvenio"
                type="text"
                register={{
                  ...register("numConvenio"),
                }}
                error={errors.numConvenio}
              />
              <InputType
                label="Validade Convenio"
                id="valConvenio"
                type="text"
                register={{
                  ...register("valConvenio"),
                }}
                error={errors.valConvenio}
              />
            </Styled.Div>
          </Styled.FormG>
          <Styled.FormG>
            <h2>Endereço</h2>
            <Styled.Div>
              <InputType
                mask={"00.000-000"}
                label="cep"
                id="cep"
                type="text"
                register={{
                  ...register("cep", {
                    required: true,
                  }),
                }}
                onChange={(e) => {
                  const cep = e.target.value;
                  handleAddress(cep);
                }}
                error={errors.cep}
              />
              <InputType
                label="Cidade"
                id="cidade"
                type="text"
                register={{
                  ...register("cidade"),
                }}
                error={errors.cidade}
              />
              <InputType
                label="Estado"
                id="estado"
                type="text"
                register={{
                  ...register("estado"),
                }}
                error={errors.estado}
              />
              <InputType
                label="Logradouro"
                id="logradouro"
                type="text"
                register={{
                  ...register("logradouro"),
                }}
                error={errors.logradouro}
              />
              <InputType
                label="Número"
                id="numero"
                type="text"
                register={{
                  ...register("numero"),
                }}
                error={errors.numero}
              />
              <InputType
                label="Complemento"
                id="complemento"
                type="text"
                register={{
                  ...register("complemento"),
                }}
                error={errors.complemento}
              />
              <InputType
                label="Bairro"
                id="bairro"
                type="text"
                register={{
                  ...register("bairro"),
                }}
                error={errors.bairro}
              />
              <InputType
                label="Ponto de Referência"
                id="referencia"
                type="text"
                register={{
                  ...register("referencia"),
                }}
                error={errors.referencia}
              />
            </Styled.Div>
          </Styled.FormG>
          <Styled.Div>
            {paciente ? (
              <ButtonComponent type="button" nome={"Editar"} onclick={edit} />
            ) : (
              <ButtonComponent type="submit" nome={"Salvar"} />
            )}
            {/*  <div>
              <SecondaryButtonComponent
                nome="Deletar"
                type="button"
                onclick={del}
              /> 
            </div>{" "}*/}
          </Styled.Div>
        </Styled.Form>
      </div>
    </>
  );
}

export default FormCadastroPacienteComponent;
