import FormLoginComponent from "../../components/FormComponent/FormLogin/FormLoginComponent.jsx";

import './LoginPage.css'
import "../../../public/MedicalLogo.png";
function LoginPage() {
  const img = "../../public/MedicalLogo.png";
  return (
    <>
      <div className="container">
        <img className="img" src={img} />

        <FormLoginComponent />
      </div>
    </>
  );
}

export default LoginPage;
