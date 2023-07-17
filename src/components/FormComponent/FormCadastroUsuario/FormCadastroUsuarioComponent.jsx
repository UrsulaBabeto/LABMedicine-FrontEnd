/* Campos do formulário:
i. Nome Completo: Obrigatório, com máximo e mínimo de 50 e 5
caracteres, respectivamente.
ii. Gênero: Obrigatório com dropdown de opções pré-definidas.
iii. Data de Nascimento: Obrigatório, data válida.
iv. CPF: Obrigatório com o formato 000.000.000-00
v. RG com órgão expedidor: Obrigatório, com máximo de 20 caracteres.
vi. Estado Civil: Obrigatório com dropdown de opções pré-definidas.
vii. Telefone: Obrigatório com o formato (99) 9 9999-99999
viii. E-mail: Não obrigatório e com validação.
ix. Naturalidade: Obrigatório, com máximo e mínimo de 50 e 5 caracteres,
respectivamente.
x. Contato de Emergência: Obrigatório com o formato (99) 9 9999-99999
xi. Lista de Alergias: Não obrigatório.
xii. Lista de Cuidados Específicos: Não obrigatório.
xiii. Convênio: Não obrigatório.
xiv. Número do Convênio: Não obrigatório.
xv. Validade do Convênio: Não obrigatório.
xvi. Endereço: Cep, Cidade, Estado, Logradouro, Número, Complemento,
Bairro e Ponto de Referência.
c. Deverá utilizar a API do ViaCEP para buscar os dados de endereço.
d. Deverá verificar os dados informados antes de cadastrar.
e. Deverá criar um identificador único para cada paciente cadastrado. */
import InputComponent from "../../InputComponent/InputComponent";

function FormCadastroUsuarioComponent() {
    return ( <>
    <InputComponent label="Nome Completo" id="name" />
    <InputComponent label="Nome Completo" id="name" />
    <InputComponent label="Nome Completo" id="name" />
    <InputComponent label="Nome Completo" id="name" />
    <InputComponent label="Nome Completo" id="name" />
    <InputComponent label="Nome Completo" id="name" />
    <InputComponent label="Naturalidade" id="naturalidade" />
    <InputComponent label="Lista de Alergias" id="alergies" />
    <InputComponent label="Endereço" id="endereco" />
</> );
}

export default FormCadastroUsuarioComponent;