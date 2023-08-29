import { relogios } from "../../data/SmartwatchsData";
import { Container } from "./styles";

import Screens from "../../components/Filter";


export default function Smartwatchs() {
    return (
        <Container>
            <p>
                <strong>Você está em: </strong>Smartwatchs
            </p>
            <Screens products={relogios} type="clock" />
        </Container>
    );
}
