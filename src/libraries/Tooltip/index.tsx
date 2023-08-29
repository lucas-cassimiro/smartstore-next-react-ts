import { ReactNode, useState } from "react";
import { Container } from "./styles";

interface TooltipProps {
    children: ReactNode;
    text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <Container
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && <div>{text}</div>}
        </Container>
    );
}
