import currencyFormat from "../../helpers/currencyFormat";

import { Container } from "./styles";
import { useCart } from "../../hooks/useCart";

export default function ConfirmOrder() {
    const { cart } = useCart();

    const totalAmount = cart.reduce((acc: any, item: any) => {
        if (item.blackFriday) {
            return (acc +=
                ((item.price * (100 - item.discount!)) / 100) * item.quantity);
        } else if (!item.blackFriday) {
            return (acc += item.price * item.quantity);
        }
    }, 0);

    return (
        <Container>
            <button type="button">Finalizar Pedido</button>
            <span>
                Total <strong>{currencyFormat(totalAmount)}</strong>
            </span>
        </Container>
    );
}
