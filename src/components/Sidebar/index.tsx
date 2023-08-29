"use client";

import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import Link from "next/link";

export default function Sidebar() {
    const [sidebar, setSidebar] = useState<boolean>(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <button>
            <FaBars onClick={showSidebar} />
            {sidebar && (
                <aside>
                    <FaTimes onClick={showSidebar} />
                    <ul>
                        <li>
                            <Link href="/iphones">iPhones</Link>
                        </li>
                        <li>
                            <Link href="/androids">Androids</Link>
                        </li>
                        <li>
                            <Link href="/smartwatchs">Smartwatchs</Link>
                        </li>
                        <li>
                            <Link href="/fones">Fones Bluetooth</Link>
                        </li>
                        <li>
                            <Link href="/blackfriday">Black Friday</Link>
                        </li>
                    </ul>
                </aside>
            )}
        </button>
    );
}
