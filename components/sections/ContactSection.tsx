import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-32 container px-4 md:px-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        Got a project?
                    </h4>
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-9xl font-bold uppercase leading-none tracking-tighter"
                    >
                        LET'S <br />
                        TALK.
                    </motion.h2>
                </div>

                <div className="flex flex-col items-end gap-6">
                    <a
                        href="mailto:hello@developer.com"
                        className="text-xl md:text-2xl font-bold hover:text-muted-foreground transition-colors flex items-center gap-2 group"
                    >
                        hello@developer.com
                        <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                    </a>

                    <div className="flex gap-6 text-sm uppercase font-bold tracking-widest text-muted-foreground">
                        <a href="#" className="hover:text-foreground transition-colors">Github</a>
                        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                    </div>
                </div>
            </div>

            {/* Footer Strip */}
            <div className="absolute bottom-0 left-0 w-full border-t border-border/20 py-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
                © 2026 Fardin Khan Portfolio
            </div>
        </section>
    );
}
