import { useCart } from "../../../hooks/useCart";
import { Container } from "./styles";
import Image from "next/image";

import currencyFormat from "../../../helpers/currencyFormat";

import ConfirmOrder from "../../ConfirmOrder";

import ButtonRemoveFromCart from "../../Buttons/RemoveFromCart";
import ButtonIncrementToCart from "../../Buttons/IncrementFromCart";
import ButtonDecrementToCart from "../../Buttons/DecrementFromCart";

export default function CartMobile() {
    const { cart } = useCart();

    return (
        <Container>
            {cart.map((item) => (
                <div key={`${item.name}`} className="order-item">
                    <div>
                        <Image src={item.img} alt={item.name} />
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                        <span>{currencyFormat(item.price)}</span>
                        <div>
                            <div>
                                <ButtonDecrementToCart item={item} />
                                <span>
                                    {`${item.quantity}`.padStart(2, "0")}
                                </span>
                                <ButtonIncrementToCart item={item} />
                            </div>
                            <ButtonRemoveFromCart item={item} />
                        </div>
                        {item.blackFriday && (
                            <h5>
                                Subtotal
                                <span>
                                    {" "}
                                    {currencyFormat(
                                        ((item.price * (100 - item.discount!)) /
                                            100) *
                                            item.quantity
                                    )}
                                </span>
                            </h5>
                        )}
                        {!item.blackFriday && (
                            <h5>
                                Subtotal
                                <span>
                                    {" "}
                                    {currencyFormat(item.price * item.quantity)}
                                </span>
                            </h5>
                        )}
                    </div>
                </div>
            ))}
            <ConfirmOrder />
        </Container>
    );
}
