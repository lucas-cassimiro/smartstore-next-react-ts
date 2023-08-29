"use client";

import { useState, useEffect, ChangeEvent } from "react";

import isValidProp from "@emotion/is-prop-valid";

import { PagesProductsData } from "../../../interfaces/ProductsData";
import { Celulares, Container, Content } from "./styles";
import { StyleSheetManager } from "styled-components";
import CardProducts from "../../CardProducts";
import { FaTimes } from "react-icons/fa";

interface ProductProps {
    products: PagesProductsData[];
    type: string;
}

interface FilterProps {
    price: string[];
    storage: string[];
    color: string[];
    order: string;
    display: string;
    name: string;
}

export default function FilterMobile({ products, type }: ProductProps) {
    const [price, setPrice] = useState<string[]>([]);
    const [storage, setStorage] = useState<string[]>([]);
    const [color, setColor] = useState<string[]>([]);
    const [order, setOrder] = useState<string>("");
    const [display, setDisplay] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [product, setProducts] = useState<PagesProductsData[]>([]);

    const [showFilter, setShowFilter] = useState(false);
    const filterOn = () => setShowFilter(!showFilter);

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

        setProducts(filtered);
    }

    useEffect(() => {
        filterAll({ price, storage, color, order, display, name });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [price, storage, color, order, display, name]);

    return (
        <StyleSheetManager shouldForwardProp={isValidProp}>
            <Container isvisible={showFilter ? 1 : 0}>
                <div>
                    <button>
                        <li onClick={filterOn}>Filtrar ↑↓</li>
                    </button>

                    <div>
                        <section>
                            <FaTimes onClick={filterOn} />
                        </section>

                        <h3>Filtrar produtos</h3>
                        <h3>Preço</h3>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="0-1000"
                                onChange={handleChangePrice}
                            />
                            R$ 0 - R$1000
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="1001-2000"
                                onChange={handleChangePrice}
                            />
                            R$ 1.001 - R$ 2.000
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="2001-3000"
                                onChange={handleChangePrice}
                            />
                            R$ 2.001 - R$ 3.000
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="3001-4000"
                                onChange={handleChangePrice}
                            />
                            R$ 3.001 - R$ 4.000
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="4001-5000"
                                onChange={handleChangePrice}
                            />
                            R$ 4.001 - R$ 5.000
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="5001-6000"
                                onChange={handleChangePrice}
                            />
                            R$ 5.001 - R$ 6.000
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="6001-7000"
                                onChange={handleChangePrice}
                            />
                            R$ 6.001 - R$ 7.000
                        </label>
                        <h3>Armazenamento</h3>
                        {type === "clock" || type === "phone" ? (
                            <>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="64"
                                        onChange={handleChangeStorage}
                                        disabled
                                    />
                                    64 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="128"
                                        onChange={handleChangeStorage}
                                        disabled
                                    />
                                    128 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="256"
                                        onChange={handleChangeStorage}
                                        disabled
                                    />
                                    256 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="512"
                                        onChange={handleChangeStorage}
                                        disabled
                                    />
                                    512 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="1024"
                                        onChange={handleChangeStorage}
                                        disabled
                                    />
                                    1 TB
                                </label>
                            </>
                        ) : (
                            <>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="64"
                                        onChange={handleChangeStorage}
                                    />
                                    64 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="128"
                                        onChange={handleChangeStorage}
                                    />
                                    128 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="256"
                                        onChange={handleChangeStorage}
                                    />
                                    256 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="512"
                                        onChange={handleChangeStorage}
                                    />
                                    512 GB
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="armazenamento"
                                        value="1024"
                                        onChange={handleChangeStorage}
                                    />
                                    1 TB
                                </label>
                            </>
                        )}
                        <h3>Cor</h3>
                        <label>
                            <input
                                type="checkbox"
                                name="cor"
                                value="azul"
                                onChange={handleChangeColor}
                            />
                            Azul
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="cor"
                                value="branco"
                                onChange={handleChangeColor}
                            />
                            Branco
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="cor"
                                value="preto"
                                onChange={handleChangeColor}
                            />
                            Preto
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="cor"
                                value="roxo"
                                onChange={handleChangeColor}
                            />
                            Roxo
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="cor"
                                value="dourado"
                                onChange={handleChangeColor}
                            />
                            Dourado
                        </label>
                    </div>
                    <Content>
                        <label htmlFor="order">Ordenar</label>
                        <select
                            name="order"
                            id="order"
                            onChange={(e) => setOrder(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="procurados">Mais procurados</option>
                            <option value="recentes">Mais recentes</option>
                            <option value="vendidos">Mais vendidos</option>
                        </select>
                        <label htmlFor="exibir">Exibir</label>
                        <select
                            name="exibir"
                            id="exibir"
                            onChange={(e) => setDisplay(e.target.value)}
                        >
                            <option value="20">20 por página</option>
                            <option value="19">19 por página</option>
                            <option value="18">18 por página</option>
                            <option value="17">17 por página</option>
                            <option value="16">16 por página</option>
                            <option value="15">15 por página</option>
                            <option value="14">14 por página</option>
                            <option value="13">13 por página</option>
                            <option value="12">12 por página</option>
                            <option value="11">11 por página</option>
                            <option value="10">10 por página</option>
                            <option value="9">9 por página</option>
                            <option value="8">8 por página</option>
                            <option value="7">7 por página</option>
                            <option value="6">6 por página</option>
                            <option value="5">5 por página</option>
                            <option value="4">4 por página</option>
                            <option value="3">3 por página</option>
                            <option value="2">2 por página</option>
                            <option value="1">1 por página</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Pesquisar na categoria"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Content>
                </div>

                <Celulares>
                    {product.length >= 1 &&
                        product.map((product) => (
                            <CardProducts products={product} key={product.id} />
                        ))}
                    {product.length == 0 && (
                        <p>🔍 Ops! Produto não encontrado</p>
                    )}
                </Celulares>
            </Container>
        </StyleSheetManager>
    );
}
