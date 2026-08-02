import { motion } from "motion/react";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative h-screen flex flex-col justify-end pt-20 pb-20"
        >
            <div className="w-[90%] px-4 md:px-6 mx-auto border-x border-border relative h-full flex flex-col justify-end">

                {/* Background Layer (Static watermark — no parallax JS) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 0.06, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute top-[15%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] md:text-[18vw] font-bold text-center leading-none tracking-tighter text-foreground whitespace-nowrap w-full z-0"
                    >
                        Developer
                    </motion.h1>
                </div>

                <div className="container px-4 md:px-6 relative z-10 flex flex-col h-[85%] justify-end mx-auto">

                    {/* Foreground Content */}
                    <div className="relative z-10 w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end pb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.9]">
                                Fardin <br />
                                Khan
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="max-w-md ml-auto">
                                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest leading-relaxed font-inconsolata text-right">
                                    I build scalable backend systems and immersive frontend experiences — engineered for performance, designed for impact.
                                    <br className="my-2" />
                                    Bridging AI, real-time architecture, and clean UI into production-ready products.
                                </p>

                                <div className="mt-4 flex items-center gap-2 justify-end">
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
            </div>

            {/* Bottom Role Strip — pure CSS marquee, no JS loop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute bottom-4 left-0 w-full border-y border-border py-3 bg-background/50 overflow-hidden"
            >
                <div className="flex items-center text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground/80 h-full overflow-hidden hero-marquee-mask">
                    <div className="flex w-full overflow-hidden">
                        {/* CSS-driven marquee — no JS, runs on compositor thread */}
                        <div className="flex whitespace-nowrap hero-marquee-track">
                            <div className="flex gap-12 items-center px-6">
                                <span>REAL-TIME SYSTEMS</span>
                                <span>AI INTEGRATION</span>
                                <span>FINTECH LOGIC</span>
                                <span>IMMERSIVE UI</span>
                                <span>PERFORMANCE FIRST</span>
                                <span>REAL-TIME SYSTEMS</span>
                                <span>AI INTEGRATION</span>
                                <span>FINTECH LOGIC</span>
                                <span>IMMERSIVE UI</span>
                                <span>PERFORMANCE FIRST</span>
                            </div>
                            <div className="flex gap-12 items-center px-6" aria-hidden="true">
                                <span>REAL-TIME SYSTEMS</span>
                                <span>AI INTEGRATION</span>
                                <span>FINTECH LOGIC</span>
                                <span>IMMERSIVE UI</span>
                                <span>PERFORMANCE FIRST</span>
                                <span>REAL-TIME SYSTEMS</span>
                                <span>AI INTEGRATION</span>
                                <span>FINTECH LOGIC</span>
                                <span>IMMERSIVE UI</span>
                                <span>PERFORMANCE FIRST</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
