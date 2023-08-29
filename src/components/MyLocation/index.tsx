"use client";

import { useEffect, useState } from "react";

import { Container } from "./styles";

import currencyFormat from "../../helpers/currencyFormat";

import getAddress from "../../services/api";

import localFont from "next/font/local";

const myFont = localFont({
    src: [
        {
            path: "../../fonts/free-sans.ttf",
            weight: "400 500 600 700 800 900",
            style: "normal",
        },
    ],
});

export interface CepData {
    bairro: string;
    cep: number;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
    price: number;
}

const localStorageKey = "@SmartStore:location";

export default function MyLocation() {
    const [inputCep, setInputCep] = useState<string>("");
    const [cep, setCep] = useState<CepData>({} as CepData);

    const [error, setError] = useState<boolean>(false);

    async function handleCepChange(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const cepInformado = inputCep;
            const cepRecebido = await getAddress(cepInformado);
            setCep(cepRecebido);
            setInputCep("");
            setError(false);
        } catch (error) {
            setInputCep("");
            setError(true);
        }
    }

    if (cep.uf === "SP" || cep.uf === "RJ") {
        cep.price = 25;
    }

    useEffect(() => {
        if (Object.keys(cep).length === 0) return;
        localStorage.setItem(localStorageKey, JSON.stringify(cep));
    }, [cep]);

    useEffect(() => {
        const cartFromLocalStorage = localStorage.getItem(localStorageKey);

        const parsedCart =
            cartFromLocalStorage !== null
                ? JSON.parse(cartFromLocalStorage)
                : [];

        setCep(parsedCart);
    }, []);

    return (
        <Container>
            <form
                onSubmit={handleCepChange}
                id="cep"
                name="cep"
                style={myFont.style}
                className={myFont.className}
            >
                <input
                    id="cep"
                    name="cep"
                    value={inputCep}
                    onChange={(e) => setInputCep(e.target.value)}
                    placeholder="Insira um CEP"
                    style={myFont.style}
                    className={myFont.className}
                />
                <button
                    onClick={() => handleCepChange}
                    style={myFont.style}
                    className={myFont.className}
                >
                    Buscar
                </button>
            </form>

            {Object.keys(cep).length > 0 && !error ? (
                <>
                    <p style={myFont.style} className={myFont.className}>
                        Seu endereço
                    </p>
                    <ol style={myFont.style} className={myFont.className}>
                        <li>
                            <p>{cep.logradouro}</p>
                        </li>
                        <li>
                            <p>
                                {cep.bairro} - {cep.localidade}/{cep.uf}
                            </p>
                        </li>
                        <li>
                            <p>CEP - {cep.cep}</p>
                        </li>
                        <li>
                            <p>DDD - 0{cep.ddd}</p>
                        </li>
                        {cep.uf === "SP" || cep.uf === "RJ" ? (
                            <li>
                                <p>
                                    O frete para {cep.uf} é{" "}
                                    {currencyFormat(cep?.price)}
                                </p>
                            </li>
                        ) : null}
                    </ol>
                </>
            ) : null}
            {error && (
                <span>
                    Ocorreu um problema ao tentar localizar o CEP. Tente
                    novamente mais tarde.
                </span>
            )}
        </Container>
    );
}
