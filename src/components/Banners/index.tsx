import BannerBlackFriday from "../../assets/banner-blackfriday.png";
import BannerWhatsApp from "../../assets/banner-whatsapp.png";

import { Container } from "./styles";

import Image from "next/image";

export function BlackFriday() {
    return (
        <Container>
            <Image
                src={BannerBlackFriday}
                alt="Banner Black Friday"
                priority={true}
            />
        </Container>
    );
}

export function WhatsApp() {
    return (
        <Container>
            <Image src={BannerWhatsApp} alt="Banner WhatsApp" priority={true} />
        </Container>
    );
}
