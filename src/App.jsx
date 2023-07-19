import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPacientePage from "./pages/CadastroPacientePage/CadastroPacientePage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        {/*   <Route path="/home" element={<HomePage />} /> */}
          <Route path="/cadastro-paciente" element={<CadastroPacientePage />}/>
{/*           <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
