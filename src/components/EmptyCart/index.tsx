import { Container, Button } from "./styles";

import CartEmpty from "../../assets/carrinho-vazio.jpeg"

import Image from "next/image";

interface EmptyCartProps {
    title: string;
}

export function EmptyCart({ title }: EmptyCartProps) {
    return (
        <Container>
            <h2>{title}</h2>
            <Button href="/">Ir para início</Button>
            <Image src={CartEmpty} alt="Boneco com carrinho vazio" priority={true}/>
        </Container>
    );
}
