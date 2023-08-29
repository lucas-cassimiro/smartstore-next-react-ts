import { ReactNode } from "react";
import { Container } from "./styles";

import localFont from "next/font/local"

const myFont = localFont({ src: "../../fonts/jejugothic-regular.ttf" });

interface TitleProps {
    children: ReactNode;
}

export default function Title({ children }: TitleProps) {
    return <Container style={myFont.style}>{children}</Container>;
}
