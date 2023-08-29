"use client";

import { SwiperSlide } from "swiper/react";
import { SwiperContainer } from "./styles";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import Image from "next/image";

import IPhone from "../../../assets/banner-main-iphone.png";
import Androids from "../../../assets/banner-main-samsung.png";
import Airpods from "../../../assets/banner-main-airpods.png";
import AppleWatch from "../../../assets/banner-main-apple-watch.png";

export default function CarouselImages() {
    return (
        <SwiperContainer
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            speed={1700}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Image src={IPhone} alt="Banner iPhone" priority={true} />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={Androids} alt="Banner Android" priority={true} />
            </SwiperSlide>

            <SwiperSlide>
                <Image src={Airpods} alt="Banner AirPods" priority={true} />
            </SwiperSlide>

            <SwiperSlide>
                <Image
                    src={AppleWatch}
                    alt="Banner Apple watch"
                    priority={true}
                />
            </SwiperSlide>
        </SwiperContainer>
    );
}
