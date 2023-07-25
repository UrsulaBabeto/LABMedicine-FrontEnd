import { useState } from "react";
import Button from '@mui/material/Button';
import FormLoginComponent from "../../components/FormComponent/FormLogin/FormLoginComponent.jsx";
import FormCadastroUsuarioComponent from "../../components/FormComponent/FormCadastroUsuario/FormCadastroUsuarioComponent.jsx";

import './LoginPage.css'
import { Input } from "../../components/InputComponent/InputLogin/InputLoginStyle.js";

function LoginPage() {
 const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="containerLogin">
        <div  className="containerLogin">
        {isLogin? <img className="imgLogin" src="/MedicalLogo.png" />:<img className="imgLogin" src="/cadastroPage.jpg" />}      
        </div>
   
      <div className="container1Login">
        <div className="criarLogin">
         {isLogin? <span>ainda não possui uma conta? </span>:<h2>Cadastrar</h2>}
         {isLogin? <Button type="submit" onClick={()=>{setIsLogin(!isLogin)}}>
            Criar
          </Button>:<Button type="submit" onClick={()=>{setIsLogin(!isLogin)}}>
            Voltar
          </Button>}
          </div>
        {isLogin? <FormLoginComponent />:<FormCadastroUsuarioComponent/>}
        </div>
     
        
      </div>
    </>
  );
}

export default LoginPage;

