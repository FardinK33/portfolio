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
    const [activeSection, setActiveSection] = React.useState<string | null>(null);
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

    React.useEffect(() => {
        setMounted(true);

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -35% 0px", // Adjusts the active area to be more central
            threshold: 0.1,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const element = document.querySelector(link.href);
            if (element) observer.observe(element);
        });

        // Also observe home/hero section to clear active state if needed, or set to home
        const homeElement = document.querySelector("#home");
        if (homeElement) observer.observe(homeElement);

        return () => observer.disconnect();
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
                className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/50 border-b border-border"
            >
                {/* 
                   Constrain content to the same width as the main app 
                   Use container mx-auto to match other sections
                */}
                <div className="w-[90%] mx-auto h-20 flex items-center justify-between px-4 md:px-6 border-x border-border">

                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => handleLinkClick(e, "#home")}
                        className="text-lg md:text-xl font-bold uppercase tracking-widest hover:text-muted-foreground transition-colors"
                    >
                        Fardin Khan
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 h-full" onMouseLeave={() => setHoveredLink(null)}>
                        <div className="h-full w-px border border-border mr-2"></div>


                        {navLinks.map((link) => {
                            const isSelected = hoveredLink ? hoveredLink === link.href : activeSection === link.href;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    onMouseEnter={() => setHoveredLink(link.href)}
                                    className={cn(
                                        "text-sm font-medium uppercase tracking-widest transition-colors relative group py-2",
                                        isSelected ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                    {isSelected && (
                                        <motion.span
                                            layoutId="navbar-underline"
                                            className="absolute bottom-0 left-0 w-full h-px bg-foreground"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </a>
                            );
                        })}

                        <div className="h-full w-px border border-border"></div>

                        {/* Theme Toggle (Desktop) */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full hover:bg-muted transition-all text-foreground ${theme === "dark" ? "border-r border-t" : "border-l border-b"}`}
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
