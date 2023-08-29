import Topside from "../components/Topside";
import { Inter } from "next/font/google";

import { GlobalStyle } from "../styles/global";
import Footer from "../components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Providers from "../components/Providers";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export interface NavLink {
    name: string;
    href: string;
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const navLinks: NavLink[] = [
        {
            name: "iPhones",
            href: "/iphones",
        },
        {
            name: "Androids",
            href: "/androids",
        },
        {
            name: "Smartwatchs",
            href: "/smartwatchs",
        },
        {
            name: "Fones Bluetooth",
            href: "/fones",
        },
        {
            name: "Black Friday",
            href: "/blackfriday",
        },
    ];

    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <GlobalStyle />
                    <ToastContainer autoClose={2000} />
                    <Providers>
                        <Topside navLinks={navLinks} />
                        {children}
                        <Footer />
                    </Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
