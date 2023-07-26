/* 
c. Deverá utilizar a API do ViaCEP para buscar os dados de endereço.
d. Deverá verificar os dados informados antes de cadastrar.
e. Deverá criar um identificador único para cada paciente cadastrado. */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ApiService } from "../../../service/ApiService/ApiService";
import InputMask from "react-input-mask";


import OptionComponent from "../../OptionComponent/OptionComponent";
import SecondaryButtonComponent from "../../ButtonComponent/SecondaryButtonComponent";
import InputType from "../../InputComponent/InputType/InputType";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import SearchComponent from "../../SearchComponent/SearchComponent";

import * as Styled from "./FormCadastroStyled";

function FormCadastroPacienteComponent() {
  const serviceAPIVIACEP = new ApiService("pacientes");
  const service = new ApiService("users");
  const [address, setAddress] = useState({});
  
  const {
    register,
    handleSubmit,
    reset,  
    formState: { errors, isValid },
    setValue,
  } = useForm();

  const onSubmitForm = async (data) => {

    if (!isValid) {
      alert("Erro, tente novamente");
    } else {
      try {
        await service.Create(data);
        console.log(JSON.stringify(data));
        alert("Paciente cadastrado com sucesso");
        reset();
      } catch (error) {
        console.error(error);
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

  const handleAddress = async (cep) => {
    try {
      await serviceAPIVIACEP
        .GetCEP()
        .then(setAddress(data))
        .then(
          setValue("cidade", data.localidade),
          setValue("estado", data.uf),
          setValue("logradouro", data.logradouro),
          setValue("bairro", data.bairro)
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Styled.Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
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
              {...register("genero", { required: true })}
              error={errors.genero}
            />

            <OptionComponent
              id="sexo"
              name="sexo"
              value="Feminino"
              value1="Masculino"
              value2="Prefiro não declarar"
              {...register("sexo", { required: true })}
              error={errors.sexo}
            />

            <InputType
              id="dataNasc"
              type="date"
              register={{
                ...register("dataNasc", { required: true }),
              }}
              error={errors.dataNasc}
            />
{/* 
<NumberFormat
  format="###.###.###-##"
  customInput={InputType} // Substitua pelo componente que deseja estilizar (por exemplo, InputType)
  label="CPF"
  id="cpf"
  type="text"
  {...register("cpf", { required: true })}
/> */}
         

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
              register={{ ...register("estadoCivil", { required: true }) }}
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
        </Styled.FormGroup>
        <Styled.FormGroup>
          <h2>Endereço</h2>
          <Styled.Div>
            <InputType
              label="cep"
              id="cep"
              type="text"
              register={{
                ...register("cep", {
                  required: true,
                  pattern: {
                    value: /^\d{5}-?\d{3}$/,
                  },
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
              defaultValue={address.cidade}
              error={errors.cidade}
            />
            <InputType
              label="Estado"
              id="estado"
              type="text"
              register={{
                ...register("estado"),
              }}
              defaultValue={address.estado}
              error={errors.estado}
            />
            <InputType
              label="Logradouro"
              id="logradouro"
              type="text"
              register={{
                ...register("logradouro"),
              }}
              defaultValue={address.logradouro}
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
              defaultValue={address.bairro}
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
        </Styled.FormGroup>
        <Styled.Div>
          <ButtonComponent type="submit" nome={"Salvar"} />
        </Styled.Div>
      </Styled.Form>
    </>
  );
}

export default FormCadastroPacienteComponent;
