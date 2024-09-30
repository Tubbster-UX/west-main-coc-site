"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const links = [
    { href: "/contact", title: "CONTACT" },
    { href: "/about", title: "ABOUT" },
    { href: "/ministries", title: "MINISTRIES" },
    { href: "/give", title: "GIVE" }
];

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMobileMenuOpen]);

    return (
        <div>
            <div className={`inset-0 bg-primary transition-opacity duration-300 absolute z-50 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Button className="absolute right-0 p-10">
                    <X className="w-7 h-7" onClick={() => setIsMobileMenuOpen(false)} />
                </Button>
                <nav className="flex flex-col items-center justify-center h-full space-y-4">
                    {links.map(link => (
                        <Link key={link.href} href={link.href} className={`text-white text-2xl ${pathname === link.href ? "border-b-2 border-white hover:border-white/75" : ""}`}>
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="bg-primary">
                <header className="container mx-auto flex items-center justify-between p-5">
                    <div className="flex justify-start">
                        <Link href="/">
                            <Logo className="w-52 fill-white" />
                        </Link>
                    </div>
                    <div className="flex-grow md:flex hidden justify-center space-x-4 text-white group">
                        {links.map(link => (
                            <Link key={link.href} href={link.href} className={`relative hover:text-white/75 transition-all duration-300 ease-in-out ${pathname === link.href ? "border-b-2 border-white hover:border-white/75" : ""}`}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <Button className="block md:hidden" onClick={() => setIsMobileMenuOpen(true)}><HamburgerMenuIcon className="h-7 w-7" /></Button>
                </header>
            </div>
        </div>
    )
}