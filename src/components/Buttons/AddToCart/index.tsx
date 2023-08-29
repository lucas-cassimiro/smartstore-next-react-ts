"use client";

import { useCart } from "../../../hooks/useCart";
import { PagesProductsData } from "../../../interfaces/ProductsData";
import { BsFillCartPlusFill } from "react-icons/bs";

interface ProductProps {
    products: PagesProductsData;
}

export default function ButtonAddToCart({ products }: ProductProps) {
    const { cart, addProductIntoCart } = useCart();

    const productExistent = cart.find(
        (item) => item.id === products.id && item.name === products.name
    );

    return (
        <button type="button" onClick={() => addProductIntoCart(products)}>
            {productExistent && <span>{productExistent.quantity}</span>}
            <BsFillCartPlusFill />
        </button>
    );
}
