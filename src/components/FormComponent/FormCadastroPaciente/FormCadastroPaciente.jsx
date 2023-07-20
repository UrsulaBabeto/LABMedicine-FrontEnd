/* 
c. Deverá utilizar a API do ViaCEP para buscar os dados de endereço.
d. Deverá verificar os dados informados antes de cadastrar.
e. Deverá criar um identificador único para cada paciente cadastrado. */
import { useForm } from "react-hook-form";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";
import OptionComponent from "../../OptionComponent/OptionComponent";

import * as Styled from "./FormCadastroStyled";

function FormCadastroPacienteComponent() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <Styled.Form>
        <Styled.Div>
          <h2>Idetificação</h2>
        </Styled.Div>

        <SimpleInputComponent
          label="Nome Completo"
          id="name"
          type="text"
          {...register("name", {
            required: true,
            minLength: 5,
            maxLength: 50,
          })}
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

        <SimpleInputComponent
          label="Data de Nascimento"
          id="dataNasc"
          type="date"
          {...register("dataNasc", { required: true })}
        />

        <SimpleInputComponent
          mask="000.000.000-00"
          label="CPF"
          id="cpf"
          type="text"
          {...register("cpf", { required: true })}
        />

        <SimpleInputComponent
          mask="44.444.444-4"
          label="RG"
          id="rg"
          type="text"
          {...register("rg", { required: true, maxLength: 20 })}
        />

        <SimpleInputComponent
          label="Email"
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
        <SimpleInputComponent
          mask="(99) 9 9999-9999"
          label="Telefone"
          id="tel"
          type="text"
          {...register("tel", { required: true })}
        />

        <OptionComponent
          id="EstadoCivil"
          name="Estado Civil"
          value="Solteiro(a)"
          value1="Casado(a)"
          value2="Viuvo(a)"
          value3="Divorciado(a)"
          {...register("EstadoCivil", { required: true })}
        />

        <SimpleInputComponent
          label="Naturalidade"
          id="naturalidade"
          {...register("birthplace", {
            required: true,
            minLength: 5,
            maxLength: 50,
          })}
        />

        <Styled.Div>
          <h2>Dados Medicos</h2>
        </Styled.Div>

        <Styled.Div>
          <SimpleInputComponent
            ref={register("emergencia", { required: true })}
            mask={"(99) 9 9999-9999"}
            label="Contato de Emergência"
            id="emergencia"
            type="text"
          />
        </Styled.Div>

        <Styled.Div>
          <Styled.Label htmlFor="">Alergias</Styled.Label>
          <Styled.TextArea id="alergias" cols="30" rows="4" />
        </Styled.Div>
        <Styled.Div>
          <Styled.Label htmlFor="">Lista de Cuidados Específicos</Styled.Label>
          <Styled.TextArea id="cuidados" cols="20" rows="4" />
        </Styled.Div>
        </Styled.Form>
        <Styled.Form>
        <Styled.Div>
          <h2>Convenio</h2>
        </Styled.Div>

        <SimpleInputComponent label="Convenio" id="convenio" />
        <SimpleInputComponent label="Nº Convenio" id="numConvenio" />
        <SimpleInputComponent label="Validade Convenio" id="valConvenio" />

        <Styled.Div>
          <h2>Endereço</h2>
        </Styled.Div>

        <SimpleInputComponent label="cep" id="cep" />
        <SimpleInputComponent label="Cidade" id="cidade" />
        <SimpleInputComponent label="Estado" id="estado" />
        <SimpleInputComponent label="Logradouro" id="logradouro" />
        <SimpleInputComponent label="Número" id="numero" />
        <SimpleInputComponent label="Complemento" id="complemento" />
        <SimpleInputComponent label="Bairro" id="bairro" />
        <SimpleInputComponent label="Ponto de Referência" id="referencia" />
      </Styled.Form>
    </>
  );
}

export default FormCadastroPacienteComponent;
