import * as Styled from './CardPacienteStyled'

function CardPacienteComponent() {
    return ( 
    <>
    <Styled.Div className="card">
        <Styled.Image src="" alt="" />
       
        <span>nome</span>
        <span>idade</span>
        <span>telefone</span>
        <span>plano</span>
        <a href="">ver mais</a>
    </Styled.Div>
    </> );
}

export default CardPacienteComponent;