import { PagesProductsData } from "@/src/interfaces/ProductsData";
import { ChangeEvent, useEffect, useState } from "react";

interface FilterProps {
    price: string[];
    storage: string[];
    color: string[];
    order: string;
    display: string;
    name: string;
}

export default function useProductFilter(products: PagesProductsData[]) {
    const [price, setPrice] = useState<string[]>([]);
    const [storage, setStorage] = useState<string[]>([]);
    const [color, setColor] = useState<string[]>([]);
    const [order, setOrder] = useState<string>("");
    const [display, setDisplay] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [product, setProduct] = useState<PagesProductsData[]>([]);

    const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (price.includes(value)) {
            const filtered = price.filter((valor) => {
                return valor != value;
            });
            return setPrice(filtered);
        }

        setPrice((prevState) => [...prevState, value]);
    };

    const handleChangeStorage = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (storage.includes(value)) {
            const filtered = storage.filter((valor) => {
                return valor != value;
            });
            return setStorage(filtered);
        }

        setStorage((prevState) => [...prevState, value]);
    };

    const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (color.includes(value)) {
            const filtered = color.filter((valor) => {
                return valor != value;
            });
            return setColor(filtered);
        }

        setColor((prevState) => [...prevState, value]);
    };

    function filterAll({
        price,
        storage,
        color,
        order,
        display,
        name,
    }: FilterProps) {
        let filtered = products;

        const valueMin: number[] = [];
        const valueMax: number[] = [];

        price.forEach((item) => {
            const priceSplit: string[] = item.split("-");

            valueMin.push(parseInt(priceSplit[0]));
            valueMax.push(parseInt(priceSplit[1]));
        });

        const valueMinOrder: number[] = valueMin.sort();
        const valueMaxOrder: number[] = valueMax.sort();

        if (price.length > 0) {
            filtered = filtered.filter((procurando) => {
                return (
                    procurando.price > valueMinOrder[0] &&
                    procurando.price < valueMaxOrder[valueMaxOrder.length - 1]
                );
            });
        }

        if (storage.length > 0) {
            filtered = filtered.filter((celular) => {
                return storage.some((value) => {
                    return celular.storage!.toString().includes(value);
                });
            });
        }

        if (color.length > 0) {
            filtered = filtered.filter((item) => {
                return color.some((value) => {
                    return item.color!.toLowerCase().includes(value);
                });
            });
        }

        if (order) {
            filtered = filtered.filter((procurado) => {
                return procurado.order === order;
            });
        }

        if (display) {
            filtered = filtered.slice(0, parseInt(display));
        }

        if (name) {
            filtered = filtered.filter((item) => {
                return item.name.toLowerCase().includes(name.toLowerCase());
            });
        }

        setProduct(filtered);
    }

    useEffect(() => {
        filterAll({ price, storage, color, order, display, name });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price, storage, color, order, display, name]);

    return {
        price,
        setPrice,
        storage,
        setStorage,
        color,
        setColor,
        order,
        setOrder,
        display,
        setDisplay,
        name,
        setName,
        product,
        setProduct,
        handleChangePrice,
        handleChangeStorage,
        handleChangeColor,
    };
}
