import FormLoginComponent from "../../components/FormComponent/FormLogin/FormLoginComponent.jsx";

import "../../../public/MedicalLogo.png";
function LoginPage() {
  const img = "../../public/MedicalLogo.png";
  return (
    <>
    
        <div className="d-flex">
          <img className="d-flex" src={img} height={500} width={800} />
       
          <FormLoginComponent />
        </div>
    
    </>
  );
}

export default LoginPage;
