import Title from "../components/Title";
import NewsCarousel from "../libraries/Slider/CardsCarousel/NewsCarousel";
import CarouselImages from "../libraries/Slider/CarouselImages";

import { news } from "../data/NewsProducts";
import { BlackFriday, WhatsApp } from "../components/Banners";

import { cards } from "../data/CardProductsData";
import CardsCarousel from "../libraries/Slider/CardsCarousel/CardCarousel";

export default function Home() {
    return (
        <>
            <CarouselImages />
            <Title>Novidades</Title>
            <NewsCarousel products={news} />
            <Title>Black Friday</Title>
            <BlackFriday />
            <CardsCarousel products={cards} />
            <WhatsApp />
        </>
    );
}
