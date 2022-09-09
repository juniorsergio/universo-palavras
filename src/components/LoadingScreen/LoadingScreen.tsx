import { Container } from "./styles";
import stilingue from "/stilingue.png";

export function LoadingScreen(){
    return (
        <Container>
            <img src={stilingue} alt="Logo da Stilingue" />
            <h3>Carregando...</h3>
        </Container>
    )
}