"use client";

import { useState, useEffect } from "react";
import { PagesProductsData } from "../../interfaces/ProductsData";

import FilterDesktop from "./FilterDesktop";
import FilterMobile from "./FilterMobile";

interface ProductProps {
    products: PagesProductsData[];
    type: string
}

export default function Screens({ products, type }: ProductProps) {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return width > 990 ? (
        <FilterDesktop products={products} type={type}/>
    ) : (
        <FilterMobile products={products} type={type} />
    );
}
