# LABMedicine - Interface para Clinicas Médicas 

> Interface criada com funcionalidades básicas e essenciais para a conexão com o api de
> o gerenciamento e automação nos atendimentos de algumas entidades relacionais do setor 
> clínico - pacientes, enfermeiros e médicos.

> Projeto criado com React [em fase de desenvolvimento]


## Tecnologias

|     | Dependências   | Descrição                                                                                                                 |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | [React]       | framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável                                          |
| 2   | [MaterialUI]         | MUI é uma biblioteca acessivel para react e disponibiliza componentes e icones simples, e customizáveis                           |
| 3   | [json-server]      | Simulandor de API REST                  |
| 4   | [styled-components]      | é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript.                   |
| 5   | [trello]      |  ferramenta visual que possibilita ao time o gerenciamento de qualquer tipo de projeto, fluxo de trabalho ou monitoramento de tarefas       |


## Técnicas

_A aplicação foi separada em arquivos e pastas que facilitam a leitura, reutilização e teste de cada componente:_

_A pasta **"src"** contém todas as subpastas abaixo:_

- **public:** imagens utilizadas na aplicação;
- **assets:** folhas de estilo globais;
- **components:** contém os componentes menores, (sub-divisão de partes) que compõem uma pagina;
- **pages:** paginas da aplicação;
- **contexts:** possui arquivos que disponibilizam funcionalidades para todas as paginas da aplicação;
- **services:** metodos CRUD que conectam com o banco de dados;


## Rodando o projeto

Abra o seu terminal de preferência e digite:

```sh
-git clone
-npm install
-npm run dev
```

Abra outro terminal e digite 

```sh
-json-server --watch db.json
```

\*Caso seja necessário, após clonar o repositório, utilize o comando "cd nomeDoArquivo" para acessar o diretório correto

\**Caso necessário, acesse a documentação disponibilizada para cada tecnologia utilizada no projeto e faça a sua instalação manualmente.
Verifique o arquivo package.json,.O projeto deve conter todas as tecnologias citadas acima

## Rotas e funcionalidades

### **App**

No App.jsx é feito todo o direcionamento da pagina utilizando a biblioteca react-router-dom

```sh
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToolbarProvider } from "./contexts/ToolbarContext/ToolbarContext";

import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPacientePage from "./pages/CadastroPacientePage/CadastroPacientePage";
import CadastroExamePage from "./pages/CadastroExamePage/CadastroExamePage";
import CadastroConsultaPage from "./pages/CadastroConsultaPage/CadastroConsultaPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ListaProntuarioPage from "./pages/ListaProntuarioPage/ListaProntuarioPage";
import ProntuarioPacientePage from "./pages/ProntuarioPacientePage/ProntuarioPacientePage";

function App() {
  return (
    <>
      <ToolbarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cadastro-paciente" element={<CadastroPacientePage />}/>
            <Route path="/cadastro-paciente/:id" element={<CadastroPacientePage />}/>
            <Route path="/cadastro-exame" element={<CadastroExamePage />} />
            <Route path="/cadastro-exame/:id" element={<CadastroExamePage />} />
            <Route path="/cadastro-consulta" element={<CadastroConsultaPage />} />
            <Route path="/cadastro-consulta/:id" element={<CadastroConsultaPage />} />
            <Route path="/lista-prontuario" element={<ListaProntuarioPage />} />
            <Route path="/prontuario-paciente" element={<ProntuarioPacientePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ToolbarProvider>
    </>
  );
}

export default App;


```

## Funcinalidades das Páginas

_Navbar_

A navbar possibilita o usuário a navegar e sair da aplicação. Também possui a função toggle para minimizar o componente 

![Navbar-readme](https://github.com/UrsulaBabeto/LABMedicine-FrontEnd/assets/105758045/f765e7c4-535e-4c1b-984e-ca9ab4e95945)

_Toolbar_

Exibe o titulo da pagina, bem vindas ao usuário e mostra a foto de perfil, quando cadastrada

![toolbar-readme](https://github.com/UrsulaBabeto/LABMedicine-FrontEnd/assets/105758045/a9e9a892-1c35-4755-af6a-77054c6dccd1)

_Barra de Busca_

Barra para busca de dados

![Search-readme](https://github.com/UrsulaBabeto/LABMedicine-FrontEnd/assets/105758045/5b648b8d-c113-4af0-aaf9-99ba6fd7cf1e)

_Pagina de Login_

A página de login possui possibilita que o usuário:
- mostre a senha digitada
- cadastre um novo usuario
- entre no sistema 
- mudança de cor de input para areas obrigatórias
 
![Loginpage-readme](https://github.com/UrsulaBabeto/LABMedicine-FrontEnd/assets/105758045/086f3635-b8bb-4734-a646-1f5cc92402e2)

_Paginas de Cadastro_

/*Como todas as paginas de cadastro possuem as mesmas funcionalidades, somente a pagina de exames será exibida como exemplo de funcionalidades
A pagina possui:
- validações de erros
- validação para botões, caso naão exista dados exibidos
- troca de botões para edição de usuario

![cadastro-readme](https://github.com/UrsulaBabeto/LABMedicine-FrontEnd/assets/105758045/36d5a404-f2f4-45ab-8974-f55ba09d499e)

_Home_

Em construção

_Prontuarios_

Em construção

## Melhorias:
- Melhorar a resposividade e CSS em um geral;
- Aplicar animações
- Finalizar funcionalidades


## Contatos:

<div>
<a href="https://www.instagram.com/ursulababeto/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:ursulacobabeto@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/ursula-babeto/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>

[React]: https://react.dev/
[MaterialUI]:https://mui.com/
[json-server]: https://www.npmjs.com/package/json-server
[styled-components]: https://styled-components.com/
[trello]: https://trello.com/
