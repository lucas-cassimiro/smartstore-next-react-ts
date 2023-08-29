"use client";

import { useCart } from "../../hooks/useCart";

export default function ProductExistent() {
    const { cart } = useCart();

    const productExistent = cart.find((product) => product);
    return <>{productExistent && <section>{cart.length}</section>}</>;
}
