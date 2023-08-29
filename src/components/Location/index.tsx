"use client";

import { useState } from "react";

import Image from "next/image";

import IconLocation from "../../assets/IconLocation.png";
import { FaTimes } from "react-icons/fa";
import MyLocation from "../MyLocation";

import localFont from "next/font/local";

const myFont = localFont({
    src: [
        {
            path: "../../fonts/free-sans.ttf",
            weight: "400 500 600 700 800 900",
            style: "normal",
        },
    ],
});

export default function Location() {
    const [location, setLocation] = useState<boolean>(false);
    const showLocation = () => setLocation(!location);

    return (
        <div>
            <Image src={IconLocation} alt="Icone de localização" />

            <a onClick={showLocation}>Selecione uma localização</a>

            {location && (
                <aside>
                    <div style={myFont.style} className={myFont.className}>
                        <p>Qual a sua localização</p>
                        <button>
                            <FaTimes onClick={showLocation} />
                        </button>
                    </div>
                    <MyLocation />
                </aside>
            )}
        </div>
    );
}
