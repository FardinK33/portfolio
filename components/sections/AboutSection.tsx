import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "motion/react";

export function AboutSection() {
    return (
        <section className="py-24 container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
                {/* Left: Heading */}
                <div>
                    <h2 className="text-6xl md:text-8xl font-bold uppercase leading-none">
                        ABOUT, <br />
                        <span className="text-transparent border-white stroke-2" style={{ WebkitTextStroke: "1px var(--foreground)" }}>SELF</span>
                    </h2>
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 border-2 border-dashed border-muted-foreground rounded-full mt-12 flex items-center justify-center"
                    >
                        <div className="w-2 h-2 bg-foreground rounded-full" />
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div className="space-y-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-light leading-snug"
                    >
                        I'm a multidisciplinary developer focused on crafting <span className="font-bold text-foreground">oozing immersive web experiences.</span> I bridge the gap between stark brutalism and functional interaction.
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-accent pl-4">Methodology</h4>
                            <p>
                                Believing code is a medium for artful expression. Every pixel is calculated, every interaction is intentional. Functionality meets raw aesthetics.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-accent pl-4">Focus</h4>
                            <p>
                                Currently obsessed with WebGL, micro-interactions, and typography-driven layouts. Pushing the boundaries of minimal design.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
