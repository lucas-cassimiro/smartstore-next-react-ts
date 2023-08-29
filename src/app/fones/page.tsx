import Screens from "../../components/Filter";
import { Container } from "./styles";

import { fones } from "../../data/FonesData";

export default function FonesBluetooth() {
    return (
        <Container>
            <p>
                <strong>Você está em: </strong>Fones Bluetooth
            </p>
            <Screens products={fones} type="phone"/>
        </Container>
    );
}
