"use client";

import { PagesProductsData } from "../../../interfaces/ProductsData";

import { SwiperSlide } from "swiper/react";
import Slider, { SliderSettings } from "..";
import NewsProducts from "../../../components/NewsProducts";

interface NewsProps {
    products: PagesProductsData[];
}

export default function NewsCarousel({ products }: NewsProps) {
    const settings: SliderSettings = {
        spaceBetween: 50,
        slidesPerView: 3,
        speed: 1000,
        pagination: { clickable: true },
        breakpoints: {
            320: {
                spaceBetween: 15,
                slidesPerView: 2,
            },
            420: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            421: {
                spaceBetween: 40,
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 41,
            },
            990: {
                pagination: true,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                pagination: false,
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 41,
                pagination: false,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50,
                pagination: false,
            },
        },
    };

    return (
        <Slider settings={settings}>
            {products.map((product) => (
                <SwiperSlide key={product.name}>
                    <NewsProducts product={product} />
                </SwiperSlide>
            ))}
        </Slider>
    );
}
