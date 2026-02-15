import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20">
            <div className="container px-4 md:px-6 relative z-10 flex flex-col h-full justify-center">

                {/* Background Layer (Parallax Text) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-[15vw] md:text-[18vw] font-bold text-center leading-none tracking-tighter text-foreground whitespace-nowrap"
                    >
                        DEVELOPER
                    </motion.h1>
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.9]">
                            Fardin <br />
                            Khan
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-4xl gap-8"
                    >
                        <div className="max-w-md">
                            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest leading-relaxed">
                                Creative Developer & Designer crafting digital experiences focused on interaction, motion, and visual impact.
                            </p>

                            <div className="mt-4 flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-mono text-muted-foreground">AVAILABLE FOR WORK</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Role Strip */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 w-full border-y border-border/50 py-3 bg-background/50 backdrop-blur-sm"
            >
                <div className="container px-4 flex justify-between items-center text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
                    <span>Creative Developer</span>
                    <span className="hidden md:inline">Interface Design</span>
                    <span>Creative Developer</span>
                    <span className="hidden md:inline">Interface Design</span>
                </div>
            </motion.div>
        </section>
    );
}
