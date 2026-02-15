import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "motion/react";

export function AboutSection() {
    return (
        <section id="about" className="py-24 container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                {/* Left: Heading */}
                <div className="border-b md:border-b-0 md:border-r border-border/50 pr-8 pb-12 md:pb-0">
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
                <div className="space-y-12 pl-8 pt-12 md:pt-0">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-light leading-snug group cursor-default"
                    >
                        I’m a full stack developer focused on building <span className="font-bold text-foreground">intelligent, real-time web applications.</span>
                        <span className="block mt-4 text-base md:text-lg text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Code with clarity. Build with intent.
                        </span>
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-accent pl-4">Intersection</h4>
                            <ul className="list-disc pl-4 space-y-2">
                                <li>AI-powered systems</li>
                                <li>Financial data automation</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-accent pl-4">Core</h4>
                            <ul className="list-disc pl-4 space-y-2">
                                <li>Scalable backend architecture</li>
                                <li>Clean, performance-driven design</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="pt-8 border-t border-border/50">
                        <h3 className="text-xl md:text-3xl font-bold uppercase">
                            I don’t just build interfaces — <br />
                            <span className="text-muted-foreground">I build systems.</span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
