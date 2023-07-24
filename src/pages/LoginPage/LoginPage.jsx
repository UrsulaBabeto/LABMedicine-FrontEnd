import { useState } from "react";
import Button from '@mui/material/Button';
import FormLoginComponent from "../../components/FormComponent/FormLogin/FormLoginComponent.jsx";
import FormCadastroUsuarioComponent from "../../components/FormComponent/FormCadastroUsuario/FormCadastroUsuarioComponent.jsx";

import './LoginPage.css'

function LoginPage() {
 const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="container">
      <div>
         {isLogin? <span>ainda não possui uma conta? </span>:""}
         {isLogin? <Button type="submit" onClick={()=>{setIsLogin(!isLogin)}}>
            Criar
          </Button>:<Button type="submit" onClick={()=>{setIsLogin(!isLogin)}}>
            Voltar
          </Button>}
        </div>
        {isLogin? <img className="img" src="/MedicalLogo.png" />:<img className="img" src="/" />}      
        {isLogin? <FormLoginComponent />:<FormCadastroUsuarioComponent/>}
       
        
      </div>
    </>
  );
}

export default LoginPage;

