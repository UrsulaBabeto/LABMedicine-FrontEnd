import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPacientePage from "./pages/CadastroPacientePage/CadastroPacientePage";
import CadastroExamePage from "./pages/CadastroExamePage/CadastroExamePage";
import CadastroConsultaPage from "./pages/CadastroConsultaPage/CadastroConsultaPage";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/*   <Route path="/home" element={<HomePage />} /> */}
          <Route path="/cadastro-paciente" element={<CadastroPacientePage />} />
          <Route path="/cadastro-exame" element={<CadastroExamePage />} />
          <Route path="/cadastro-consulta" element={<CadastroConsultaPage />} />
          {/*          <Route path="/prontuario" element={< />} /> */}
          {/*           <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
