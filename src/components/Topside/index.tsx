import Image from "next/image";
import IconCart from "../../assets/icon-cart.png";

import { NavLink } from "../../app/layout";

import { Container } from "./styles";
import Link from "next/link";

import { Lobster } from "next/font/google";

import Location from "../Location";
import Sidebar from "../Sidebar";
import ProductExistent from "../ProductExistent";
import Navigation from "../Navigation";

const lobster = Lobster({
    subsets: ["latin"],
    weight: "400",
    display: 'swap',
    style: 'normal'
});

interface NavLinkProps {
    navLinks: NavLink[];
}

export default function Topside({ navLinks }: NavLinkProps) {
    return (
        <Container>
            <div>
                <p>
                    A melhor franquia de smartphones do
                    <span>Brasil</span>
                </p>

                <a href="#">SEJA UM REVENDEDOR</a>
            </div>

            <div>
                <Location />
                <h1>
                    <Link
                        href="/"
                        style={lobster.style}
                        className={lobster.className}
                    >
                        Smart Store
                    </Link>
                </h1>

                <Link href="/carrinho">
                    <div>
                        <ProductExistent />
                        <Image src={IconCart} alt="Ícone de carrinho" />
                    </div>
                </Link>
            </div>

            <nav>
                <Location />
                <Sidebar />
                <Navigation navLinks={navLinks} />
            </nav>
        </Container>
    );
}
