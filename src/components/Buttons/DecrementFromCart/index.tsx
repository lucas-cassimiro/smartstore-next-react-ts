import { Products } from "../../../context/CartContext";
import { useCart } from "../../../hooks/useCart";

import Image from "next/image";

import minusImg from "../../../assets/circle-minus.svg";

interface ButtonProps {
    item: Products;
}

export default function ButtonDecrementToCart({ item }: ButtonProps) {
    const { productCartDecrement } = useCart();

    return (
        <button type="button" onClick={() => productCartDecrement(item)}>
            <Image src={minusImg} alt="Remover quantidade" />
        </button>
    );
}
