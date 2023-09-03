"use client";

import { PagesProductsData } from "../../../interfaces/ProductsData";

import Tooltip from "../../../libraries/Tooltip";

import { BsFillInfoCircleFill } from "react-icons/bs";

import { Container } from "./styles";

import CardProducts from "../../CardProducts";
import Image from "next/image";

import Filter from "../../../assets/filter-ordered.png";
import useProductFilter from "../LogicFilter";
import { useEffect, useState } from "react";

interface ProductProps {
    products: PagesProductsData[];
    type: string;
}

export default function FilterDesktop({ products, type }: ProductProps) {
    const {
        handleChangePrice,
        handleChangeColor,
        handleChangeStorage,
        name,
        setDisplay,
        setOrder,
        setName,
        product,
    } = useProductFilter(products);

    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container>
            <div>
                <div>
                    <h3>Categorias relacionadas</h3>
                    <p>Androids</p>
                    <p>Smartwatchs</p>
                    <p>Fones bluetooth</p>
                    <p>Acessórios</p>
                    <div>
                        <Image src={Filter} alt="Ícone filtrar" />
                        <h3>Filtrar por:</h3>
                    </div>
                    <div>
                        <h4>Preço</h4>
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
                                value="1001 - 2000"
                                onChange={handleChangePrice}
                            />
                            R$ 1.001 - R$ 2.000
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="preco"
                                value="2001 - 3000"
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

                        <h4>Armazenamento</h4>
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

                        <h4>Cor</h4>
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
                </div>
                <div className="order">
                    <div>
                        <div>
                            {width < 1350 ? (
                                <Tooltip text="Selecione uma categoria">
                                    <BsFillInfoCircleFill />
                                </Tooltip>
                            ) : (
                                ""
                            )}
                        </div>
                        <label htmlFor="ordenar">Ordenar</label>
                        <select
                            name="ordenar"
                            id="ordenar"
                            onChange={(e) => setOrder(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="procurados">Mais procurados</option>
                            <option value="recentes">Mais recentes</option>
                            <option value="vendidos">Mais vendidos</option>
                        </select>
                        <div>
                            {width < 1153 ? (
                                <Tooltip text="Selecione uma categoria de exibição">
                                    <BsFillInfoCircleFill />
                                </Tooltip>
                            ) : (
                                ""
                            )}
                        </div>
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
                    </div>
                    <div>
                        {product.length > 1 &&
                            product.map((product) => (
                                <CardProducts
                                    products={product}
                                    key={product.id}
                                />
                            ))}
                        {product.length == 0 && (
                            <span>🔍 Ops! Produto não encontrado</span>
                        )}
                    </div>
                    <div>
                        {product.length === 1 &&
                            product.map((product) => (
                                <CardProducts
                                    products={product}
                                    key={product.id}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
