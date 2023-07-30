import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToolbarProvider } from "./contexts/ToolbarContext/ToolbarContext";

import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPacientePage from "./pages/CadastroPacientePage/CadastroPacientePage";
import CadastroExamePage from "./pages/CadastroExamePage/CadastroExamePage";
import CadastroConsultaPage from "./pages/CadastroConsultaPage/CadastroConsultaPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
    <ToolbarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cadastro-paciente" element={<CadastroPacientePage />} />
          <Route path="/cadastro-paciente/:id" element={<CadastroPacientePage />} />
          <Route path="/cadastro-exame" element={<CadastroExamePage />} />
          <Route path="/cadastro-exame/:id" element={<CadastroExamePage />} />
          <Route path="/cadastro-consulta" element={<CadastroConsultaPage />} />
          <Route path="/cadastro-consulta/:id" element={<CadastroConsultaPage />} />
          {/*          <Route path="/prontuario" element={< />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      </ToolbarProvider>
 
        </>
  );
}

export default App;
