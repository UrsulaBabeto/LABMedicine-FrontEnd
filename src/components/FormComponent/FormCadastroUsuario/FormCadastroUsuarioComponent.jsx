/* Campos do formulário:
i. Nome Completo: Obrigatório, com máximo e mínimo de 50 e 5
caracteres, respectivamente.
.



x. Contato de Emergência: Obrigatório com o formato (99) 9 9999-99999
xi. Lista de Alergias: Não obrigatório.
xii. Lista de Cuidados Específicos: Não obrigatório.
xvi. Endereço: 
c. Deverá utilizar a API do ViaCEP para buscar os dados de endereço.
d. Deverá verificar os dados informados antes de cadastrar.
e. Deverá criar um identificador único para cada paciente cadastrado. */
import { useForm } from "react-hook-form";

import SimpleInputComponent from "../../InputComponent/SimpleInput/SimpleInputComponent";
import OptionComponent from "../../OptionComponent/OptionComponent";

import * as Styled from "./FormCadastroStyled";

function FormCadastroUsuarioComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Styled.Form action="">
        <Styled.Div>
          <h2>Idetificação</h2>
        </Styled.Div>
        <SimpleInputComponent label="Nome Completo" id="name" type="text" />
        <OptionComponent
          name="Genero"
          value="Cisgenero"
          value1="Transgenero"
          value2="Prefiro não declarar"
        />
        <OptionComponent
          name="Sexo"
          value="Feminino"
          value1="Masculino"
          value2="Prefiro não declarar"
        />
        <SimpleInputComponent
          label="Data de Nascimento"
          id="dataNasc"
          type="date"
        />
        <SimpleInputComponent label="CPF" id="cpf" type="text"   width={70} />
        <SimpleInputComponent label="RG" id="rg" type="text" />
        <SimpleInputComponent label="Email" id="email" type="text" />
        <SimpleInputComponent label="Telefone" id="tel" type="text" />
        <OptionComponent
          name="Estado Civil"
          value="Solteiro(a)"
          value1="Casado(a)"
          value2="Viuvo(a)"
          value3="Divorciado(a)"
        />
        <SimpleInputComponent label="Naturalidade" id="naturalidade" />
        <Styled.Div>
          <h2>Dados Medicos</h2>
        </Styled.Div>

        <Styled.Div>
          <Styled.Label htmlFor="">Alergias</Styled.Label>
          <Styled.TextArea id="emergencia" cols="30" rows="4" />
        </Styled.Div>
        <Styled.Div>
          <Styled.Label htmlFor="">Contato de Emergência</Styled.Label>
          <Styled.TextArea id="emergencia" cols="30" rows="4" />
        </Styled.Div>
        <Styled.Div>
          <Styled.Label htmlFor="">Lista de Cuidados Específicos</Styled.Label>
          <Styled.TextArea id="cuidados" cols="20" rows="4" />
        </Styled.Div>
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

export default FormCadastroUsuarioComponent;
