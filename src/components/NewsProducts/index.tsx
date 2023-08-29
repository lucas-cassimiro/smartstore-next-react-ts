import { PagesProductsData } from "../../interfaces/ProductsData";
import { Container } from "./styles";

import Image from "next/image";

import currencyFormat from "../../helpers/currencyFormat";

import localFont from "next/font/local";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
    src: [
        {
            path: "../../fonts/jejugothic-regular.ttf",
            weight: "400 900",
            style: "regular",
        },
    ],
});

interface NewsProps {
    product: PagesProductsData;
}

export default function NewsProducts({ product }: NewsProps) {
    return (
        <Container style={myFont.style}>
            <div>
                <Image src={product.img} alt="Imagem do produto" />
            </div>
            <h2>{product.name}</h2>
            <p className={inter.className}>
                A partir de <span>{currencyFormat(product.price)} </span>
            </p>
        </Container>
    );
}
