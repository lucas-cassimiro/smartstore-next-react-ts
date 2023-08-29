"use client";

import { useSwiper } from "swiper/react";

import Arrow from "../../../assets/arrow.png";

import Image from "next/image";

import { Container } from "./styles";

export default function SliderButton() {
    const swiper = useSwiper();

    return (
        <Container>
            <button onClick={() => swiper.slidePrev()}>
                <Image src={Arrow} alt="Seta de voltar" />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <Image src={Arrow} alt="Seta de avançar" />
            </button>
        </Container>
    );
}
