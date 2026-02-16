import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="relative overflow-hidden">
            {/* Heading Strip - Full Width Border-Y */}
            <div className="w-full border-y border-border bg-background/50 backdrop-blur-sm">
                <div className="w-[90%] mx-auto border-x border-border py-12 px-4 md:px-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        Have an idea? Building something ambitious?
                    </h4>
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold uppercase leading-none tracking-tighter"
                    >
                        LET'S <br />
                        ENGINEER IT.
                    </motion.h2>
                </div>
            </div>

            {/* Content Strip - Continuous Vertical Rails */}
            <div className="w-full">
                <div className="w-[90%] mx-auto border-x border-border pb-48 px-4 md:px-6 pt-12">
                    <div className="flex flex-col items-end gap-6 mb-8">
                        <a
                            href="mailto:fardink3103@gmail.com"
                            className="text-xl md:text-2xl font-bold hover:text-muted-foreground transition-colors flex items-center gap-2 group"
                        >
                            fardink3103@gmail.com
                            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                        </a>

                        <div className="flex gap-6 text-sm uppercase font-bold tracking-widest text-muted-foreground">
                            <a href="https://github.com/fardink33" className="hover:text-foreground transition-colors" target="_blank">Github</a>
                            <a href="https://www.linkedin.com/in/fardink33" className="hover:text-foreground transition-colors" target="_blank">LinkedIn</a>
                            <a href="https://www.instagram.com/fardin_k31" className="hover:text-foreground transition-colors" target="_blank">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Strip */}
            <div className="absolute bottom-0 left-0 w-full border-t border-border/20 py-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
                © 2026 Fardin Khan. Built with Next.js & Tailwind.
            </div>
        </section>
    );
}
