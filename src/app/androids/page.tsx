import Screens from "../../components/Filter";
import { Container } from "./styles";

import { androids } from "../../data/AndroidsData";

export default function Androids() {
    return (
        <Container>
            <p>
                <strong>Você está em: </strong>Androids
            </p>
            <Screens products={androids} type="cellphone" />
        </Container>
    );
}
