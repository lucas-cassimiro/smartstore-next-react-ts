import { Products } from "../../../context/CartContext";
import { useCart } from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

interface ButtonProps {
    item: Products;
}

export default function ButtonRemoveFromCart({ item }: ButtonProps) {
    const { removeProductFromCart } = useCart();
    return (
        <button type="button" onClick={() => removeProductFromCart(item)}>
            <FaTrashAlt />
        </button>
    );
}
