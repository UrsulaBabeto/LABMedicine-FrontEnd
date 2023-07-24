/* 
c. Deverá utilizar a API do ViaCEP para buscar os dados de endereço.
d. Deverá verificar os dados informados antes de cadastrar.
e. Deverá criar um identificador único para cada paciente cadastrado. */
import { useForm } from "react-hook-form";

import OptionComponent from "../../OptionComponent/OptionComponent";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";
import InputType from "../../InputComponent/InputType/InputType";

import * as Styled from "./FormCadastroStyled";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

function FormCadastroPacienteComponent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmitForm = async (data) => {
    const {
      name,
      Genero,
      Sexo,
      dataNasc,
      cpf,
      rg,
      email,
      tel,
      EstadoCivil,
      naturalidade,
      emergencia,
      alergias,
      cuidados,
      convenio,
      numConvenio,
      valConvenio,
      cep,
      cidade,
      estado,
      logradouro,
      numero,
      complemento,
      bairro,
      referencia,
    } = data;

    if (!isValid) {
      alert("Erro, tente novamente");
    } else {
      try {
        await service.Create(data);
        console.log(JSON.stringify(data));
        reset();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
        <Styled.FormGroup>
          <div>
            <SecondaryButtonComponent nome="Editar" />
          </div>
          <div>
            <SecondaryButtonComponent nome="Deletar" />
          </div>
        </Styled.FormGroup>
        <Styled.FormGroup>
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
            />

            <OptionComponent
              id="Genero"
              name="Genero"
              value="Cisgenero"
              value1="Transgenero"
              value2="Prefiro não declarar"
              {...register("Genero", { required: true })}
            />

            <OptionComponent
              id="Sexo"
              name="Sexo"
              value="Feminino"
              value1="Masculino"
              value2="Prefiro não declarar"
              {...register("Sexo", { required: true })}
            />

            <InputType
              id="dataNasc"
              type="date"
              register={{
                ...register("dataNasc", { required: true }),
              }}
            />
            <InputType
              mask="000.000.000-00"
              label="CPF"
              id="cpf"
              type="text"
              register={{
                ...register("cpf", { required: true }),
              }}
            />

            <InputType
              label="Email"
              id="email"
              type="email"
              register={{
                ...register("email", { required: true }),
              }}
            />

            <InputType
              mask="(99) 9 9999-9999"
              label="Telefone"
              id="tel"
              type="text"
              register={{
                ...register("tel", { required: true }),
              }}
            />

            <OptionComponent
              id="EstadoCivil"
              name="Estado Civil"
              value="Solteiro(a)"
              value1="Casado(a)"
              value2="Viuvo(a)"
              value3="Divorciado(a)"
              register={{ ...register("EstadoCivil", { required: true }) }}
              error={errors.EstadoCivil}
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
            />
          </Styled.Div>
        </Styled.FormGroup>

        <Styled.FormGroup>
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
            />

            <TextareaComponent
              placeholder={"Alergias"}
              id="cuidados"
              register={{ ...register("alergias") }}
            />

            <TextareaComponent
              placeholder={"Lista de Cuidados Específicos"}
              id="cuidados"
              register={{ ...register("cuidados") }}
            />
          </Styled.Div>
        </Styled.FormGroup>

        <Styled.FormGroup>
          <h2>Convenio</h2>
          <Styled.Div>
            <InputType
              label="Convenio"
              id="convenio"
              type="text"
              register={{
                ...register("convenio"),
              }}
            />
            <InputType
              label="Nº Convenio"
              id="numConvenio"
              type="text"
              register={{
                ...register("numConvenio"),
              }}
            />
            <InputType
              label="Validade Convenio"
              id="valConvenio"
              type="text"
              register={{
                ...register("valConvenio"),
              }}
            />
          </Styled.Div>
        </Styled.FormGroup>
        <Styled.FormGroup>
          <h2>Endereço</h2>
          <Styled.Div>
            <InputType
              label="cep"
              id="cep"
              type="text"
              register={{
                ...register("cep"),
              }}
            />
            <InputType
              label="Cidade"
              id="cidade"
              type="text"
              register={{
                ...register("cidade"),
              }}
            />
            <InputType
              label="Estado"
              id="estado"
              type="text"
              register={{
                ...register("estado"),
              }}
            />
            <InputType
              label="Logradouro"
              id="logradouro"
              type="text"
              register={{
                ...register("logradouro"),
              }}
            />
            <InputType
              label="Número"
              id="numero"
              type="text"
              register={{
                ...register("numero"),
              }}
            />
            <InputType
              label="Complemento"
              id="complemento"
              type="text"
              register={{
                ...register("complemento"),
              }}
            />
            <InputType
              label="Bairro"
              id="bairro"
              type="text"
              register={{
                ...register("bairro"),
              }}
            />
            <InputType
              label="Ponto de Referência"
              id="referencia"
              type="text"
              register={{
                ...register("referencia"),
              }}
            />
          </Styled.Div>
        </Styled.FormGroup>
        <Styled.Div>
          <ButtonComponent type="submit" nome={"Salvar"} />
        </Styled.Div>
      </Styled.Form>
    </>
  );
}

export default FormCadastroPacienteComponent;
