import currencyFormat from "../../helpers/currencyFormat";

import { Container } from "./styles";

import { PagesProductsData } from "../../interfaces/ProductsData";

import Image from "next/image";
import ButtonAddToCart from "../Buttons/AddToCart";
import HalfRating from "../../libraries/Rating";

interface ProductProps {
    products: PagesProductsData;
}

export default function CardProducts({ products }: ProductProps) {
    return (
        <Container>
            <Image src={products.img} alt={products.name} />
            <div>
                <div>
                    {products.blackFriday && <p>-{products.discount}%</p>}
                    {products.blackFriday && <p>Black Friday</p>}
                </div>
                <h4>{products.name}</h4>
                <HalfRating star={products.rating!} />

                {products.blackFriday && (
                    <p>{currencyFormat(products.price)}</p>
                )}

                {products.discount && (
                    <section>
                        <p>
                            {currencyFormat(
                                (products.price * (100 - products.discount)) /
                                    100
                            )}
                        </p>

                        <ButtonAddToCart products={products} />
                    </section>
                )}

                {!products.blackFriday && (
                    <section>
                        <p>{currencyFormat(products.price)}</p>

                        <ButtonAddToCart products={products} />
                    </section>
                )}

                {!products.blackFriday && (
                    <p>Ou 12x de {currencyFormat(products.price / 12)}</p>
                )}

                {products.blackFriday && (
                    <p>
                        Ou 12x de{" "}
                        {currencyFormat(
                            (products.price * (100 - products.discount!)) /
                                100 /
                                12
                        )}
                    </p>
                )}
            </div>
        </Container>
    );
}
