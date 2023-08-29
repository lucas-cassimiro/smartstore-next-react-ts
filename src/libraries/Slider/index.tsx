import { SwiperProps } from "swiper/react";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { ReactNode } from "react";

import { SwiperContainer } from "./styles";
import SliderButton from "./SliderButton";

export type SliderSettings = SwiperProps;

export type SliderProps = {
    children: ReactNode;
    settings: SliderSettings;
};

export default function Slider({ settings, children }: SliderProps) {
    return (
        <SwiperContainer modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
            <SliderButton />
        </SwiperContainer>
    );
}
