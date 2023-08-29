"use client";

import { useState, useEffect } from "react";

import CartDesktop from "./CartDesktop";
import CartMobile from "./CartMobile";

import { EmptyCart } from "../EmptyCart";
import { useCart } from "../../hooks/useCart";

export default function CartScreen() {
    const { cart } = useCart();

    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

     if (cart.length === 0) return <EmptyCart title="Ops! Seu carrinho está vazio" />;

    return width > 990 ? <CartDesktop /> : <CartMobile />;
}
