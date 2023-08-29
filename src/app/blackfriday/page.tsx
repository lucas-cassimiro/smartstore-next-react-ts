import Screens from "../../components/Filter";
import { Container } from "./styles";

import { blackfriday } from "../../data/BlackfridayData";

export default function BlackFriday() {
    return (
        <Container>
            <p>
                <strong>Você está em: </strong>Black Friday
            </p>
            <Screens products={blackfriday} type="all"/>
        </Container>
    );
}
