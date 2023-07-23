/* 
c. Deverá utilizar a API do ViaCEP para buscar os dados de endereço.
d. Deverá verificar os dados informados antes de cadastrar.
e. Deverá criar um identificador único para cada paciente cadastrado. */
import { useForm } from "react-hook-form";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";
import OptionComponent from "../../OptionComponent/OptionComponent";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";

import * as Styled from "./FormCadastroStyled";

function FormCadastroPacienteComponent() {
  const [showAlert, setShowAlert] = useState(false);

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
      reset();
      return (
        <AlertComponent
          type="warning"
          text="Dados obrigatórios, tente novamente"
        />
      );
    } else {
      try {
        await service.Create(data);

        <AlertComponent type="success" text="Paciente criado com sucesso" />;
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <Styled.Form onSubmit={handleSubmit(onSubmitForm)}>
        <Styled.Div>
          <h2>Idetificação</h2>
        </Styled.Div>

        <SimpleInputComponent
          label="Nome Completo"
          id="name"
          type="text"
          register={{
            ...register("name", {
              required: true,
              minLength: 5,
              maxLength: 50,
            }),
          }}
          error={errors.name}
        />
        <div>
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
        </div>
        <SimpleInputComponent
          mask="000.000.000-00"
          label="CPF"
          id="cpf"
          type="text"
          register={{ ...register("cpf", { required: true }) }}
          error={errors.cpf}
        />

        <SimpleInputComponent
          mask="44.444.444-4"
          label="RG"
          id="rg"
          type="text"
          register={{ ...register("rg", { required: true, maxLength: 20 }) }}
          error={errors.rg}
        />

        <SimpleInputComponent
          label="Email"
          id="email"
          type="email"
          register={{ ...register("email", { required: true }) }}
          error={errors.email}
        />
        <SimpleInputComponent
          mask="(99) 9 9999-9999"
          label="Telefone"
          id="tel"
          type="text"
          register={{ ...register("tel", { required: true }) }}
          error={errors.tel}
        />
        <div>
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
        </div>
        <SimpleInputComponent
          label="Naturalidade"
          id="naturalidade"
          register={{
            ...register("naturalidade", {
              required: true,
              minLength: 5,
              maxLength: 50,
            }),
          }}
          error={errors.naturalidade}
        />

        <Styled.Div>
          <h2>Dados Medicos</h2>
        </Styled.Div>

        <Styled.Div>
          <SimpleInputComponent
            mask={"(99) 9 9999-9999"}
            label="Contato de Emergência"
            id="emergencia"
            type="text"
            register={{ ...register("emergencia", { required: true }) }}
            error={errors.emergencia}
          />
        </Styled.Div>

        <Styled.Div>
          <Styled.Label htmlFor="">Alergias</Styled.Label>
          <Styled.TextArea
            id="alergias"
            cols="30"
            rows="4"
            register={{ ...register("alergias") }}
          />
        </Styled.Div>
        <Styled.Div>
          <Styled.Label htmlFor="">Lista de Cuidados Específicos</Styled.Label>
          <Styled.TextArea
            id="cuidados"
            cols="20"
            rows="4"
            register={{ ...register("cuidados") }}
          />
        </Styled.Div>
      </Styled.Form>
      <Styled.Form>
        <Styled.Buttons>
          <div>
            <SecondaryButtonComponent nome="Editar" />
          </div>
          <div>
            <SecondaryButtonComponent nome="Deletar" />
          </div>
        </Styled.Buttons>
        <Styled.Div>
          <h2>Convenio</h2>
        </Styled.Div>

        <SimpleInputComponent
          label="Convenio"
          id="convenio"
          register={{ ...register("convenio") }}
        />
        <SimpleInputComponent
          label="Nº Convenio"
          id="numConvenio"
          register={{ ...register("numConvenio") }}
        />
        <SimpleInputComponent
          label="Validade Convenio"
          id="valConvenio"
          register={{ ...register("valConvenio") }}
        />

        <Styled.Div>
          <h2>Endereço</h2>
        </Styled.Div>

        <SimpleInputComponent
          label="cep"
          id="cep"
          register={{ ...register("cep") }}
        />
        <SimpleInputComponent
          label="Cidade"
          id="cidade"
          register={{ ...register("cidade") }}
        />
        <SimpleInputComponent
          label="Estado"
          id="estado"
          register={{ ...register("estado") }}
        />
        <SimpleInputComponent
          label="Logradouro"
          id="logradouro"
          register={{ ...register("logradouro") }}
        />
        <SimpleInputComponent
          label="Número"
          id="numero"
          register={{ ...register("numero") }}
        />
        <SimpleInputComponent
          label="Complemento"
          id="complemento"
          register={{ ...register("complemento") }}
        />
        <SimpleInputComponent
          label="Bairro"
          id="bairro"
          register={{ ...register("bairro") }}
        />
        <SimpleInputComponent
          label="Ponto de Referência"
          id="referencia"
          register={{ ...register("referencia") }}
        />
      </Styled.Form>
    </>
  );
}

export default FormCadastroPacienteComponent;
