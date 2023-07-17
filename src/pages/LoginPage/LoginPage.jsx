import FormLoginComponent from '../../components/FormComponent/FormLoginComponent';
import '../../../public/MedicalLogo.png'
function LoginPage() {
const img = "../../public/MedicalLogo.png"
return ( <>
    <div className='body'> 
    <img src={img} height={500} /> 
    <FormLoginComponent/>
    </div>
    </> );
}

export default LoginPage;