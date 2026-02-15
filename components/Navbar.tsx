"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navLinks = [
    { name: "Works", href: "#works" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/50 border-b border-border/50"
            >
                {/* 
                   Constrain content to the same width as the main app 
                   Use w-[85%] mx-auto to match the user's manual change in page.tsx
                */}
                <div className="w-[90%] mx-auto h-20 flex items-center justify-between px-4 md:px-6 border-x border-border/50">

                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => handleLinkClick(e, "#home")}
                        className="text-lg md:text-xl font-bold uppercase tracking-widest hover:text-muted-foreground transition-colors"
                    >
                        Fardin Khan
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 border-l pl-4 border-border/50 h-full">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}

                        {/* Theme Toggle (Desktop) */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 ml-4 rounded-full hover:bg-muted transition-colors text-foreground"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Controls Container */}
                    <div className="md:hidden flex items-center gap-4">
                        {/* Theme Toggle (Mobile) */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="text-foreground hover:text-muted-foreground transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background pt-24 px-4 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-bold uppercase tracking-widest hover:text-muted-foreground transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
