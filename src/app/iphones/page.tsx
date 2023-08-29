import { iphones } from "../../data/iPhonesData";

import { Container } from "./styles";
import Screens from "../../components/Filter";

export default function iPhones() {
    return (
        <Container>
            <p>
                <strong>Você está em: </strong>iPhones
            </p>
            <Screens products={iphones} type="cellphone"/>
        </Container>
    );
}
