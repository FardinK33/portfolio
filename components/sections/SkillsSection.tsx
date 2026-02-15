import { motion } from "motion/react";

const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "WebGL",
    "Three.js",
    "Tailwind",
    "Figma",
];

export function SkillsSection() {
    return (
        <section className="py-24 border-y border-border/50">
            <div className="container px-0">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group aspect-square md:aspect-[4/3] border border-border/50 flex items-center justify-center relative overflow-hidden bg-background hover:bg-muted/30 transition-colors duration-500"
                        >
                            <h3 className="tex-xl md:text-2xl font-bold uppercase tracking-widest z-10 group-hover:scale-110 transition-transform duration-300">
                                {skill}
                            </h3>
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
