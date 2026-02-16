import { motion } from "motion/react";

const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "Zustand", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "FastAPI"] },
    { category: "Languages", items: ["Python", "C++", "Java", "SQL"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL"] },
];

export function SkillsSection() {
    return (
        <section id="skills">
            {/* Heading Strip - Full Width Border-Y */}
            <div className="w-full border-y border-border bg-background/50 backdrop-blur-sm">
                <div className="w-[90%] mx-auto border-x border-border py-12 px-4 md:px-6">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase">Skills</h2>
                </div>
            </div>

            {/* Content Strip - Continuous Vertical Rails */}
            <div className="w-full">
                <div className="w-[90%] mx-auto border-x border-border">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        {skills.map((group, index) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 border border-border bg-background hover:bg-muted/30 transition-colors duration-500 min-h-[200px] flex flex-col gap-4 -ml-px -mt-px"
                            >
                                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                    {group.category}
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {group.items.map(item => (
                                        <span key={item} className="text-lg md:text-xl font-bold uppercase">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

