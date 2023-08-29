import { Products } from "../../../context/CartContext";
import { useCart } from "../../../hooks/useCart";

import Image from "next/image";

import plusImg from "../../../assets/circle-plus.svg";

interface ButtonProps {
    item: Products;
}

export default function ButtonIncrementToCart({ item }: ButtonProps) {
    const { productCartIncrement } = useCart();

    return (
        <button type="button" onClick={() => productCartIncrement(item)}>
            <Image src={plusImg} alt="Adicionar quantidade" />
        </button>
    );
}
