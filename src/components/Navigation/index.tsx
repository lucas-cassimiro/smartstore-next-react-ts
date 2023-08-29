"use client";

import { NavLink } from "../../app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
    navLinks: NavLink[];
}

export default function Navigation({ navLinks }: NavigationProps) {
    const pathname = usePathname();
    
    return (
        <ul>
            {navLinks.map((link) => {
                const isActive = pathname.endsWith(link.href);
                return (
                    <li key={link.name} className={isActive ? "active" : ""}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
