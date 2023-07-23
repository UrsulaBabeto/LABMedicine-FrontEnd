import FormLoginComponent from "../../components/FormComponent/FormLogin/FormLoginComponent.jsx";

import './LoginPage.css'

function LoginPage() {
  const img = "../../public/MedicalLogo.png";
  return (
    <>
      <div className="container">
        <img className="img" src="/MedicalLogo.png" />

        <FormLoginComponent />
      </div>
    </>
  );
}

export default LoginPage;
