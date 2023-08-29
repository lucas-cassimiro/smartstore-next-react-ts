import CartScreen from "../../components/Cart";
import { Container } from "./styles";

export default function Cart() {
    return (
        <Container>
            <h1>
                <strong>Você está em: </strong>carrinho
            </h1>
            <div>
                <CartScreen />
            </div>
        </Container>
    );
}
