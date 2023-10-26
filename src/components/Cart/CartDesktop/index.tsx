import { useCart } from "../../../hooks/useCart";

import { Container } from "./styles";

import currencyFormat from "../../../helpers/currencyFormat";

import Image from "next/image";

import ConfirmOrder from "../../ConfirmOrder";
import ButtonRemoveFromCart from "../../Buttons/RemoveFromCart";
import ButtonDecrementToCart from "../../Buttons/DecrementFromCart";
import ButtonIncrementToCart from "../../Buttons/IncrementFromCart";

export default function CartDesktop() {
    const { cart } = useCart();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Produto</th>
                        <th>QTD</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={`${item.name}`}>
                            <td>
                                <Image src={item.img} alt="Imagem do produto" />
                            </td>
                            <td>
                                <h4>{item.name}</h4>
                                <span>{currencyFormat(item.price)}</span>
                            </td>
                            <td>
                                <div>
                                    <ButtonDecrementToCart item={item} />
                                    <span>
                                        {`${item.quantity}`.padStart(2, "0")}
                                    </span>
                                    <ButtonIncrementToCart item={item} />
                                </div>
                            </td>
                            <td>
                                {!item.black_friday && (
                                    <h5>
                                        {currencyFormat(
                                            item.price * item.quantity
                                        )}
                                    </h5>
                                )}
                                {item.black_friday && (
                                    <h5>
                                        {currencyFormat(
                                            ((item.price *
                                                (100 - item.discount!)) /
                                                100) *
                                                item.quantity
                                        )}
                                    </h5>
                                )}
                            </td>
                            <td>
                                <ButtonRemoveFromCart item={item} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ConfirmOrder />
        </Container>
    );
}
