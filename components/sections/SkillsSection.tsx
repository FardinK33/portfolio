import { motion } from "motion/react";

const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "Zustand", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "FastAPI"] },
    { category: "Languages", items: ["Python", "C++", "Java", "SQL"] },
    { category: "Database", items: ["MongoDB", "Relational Systems"] },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 border-l border-t border-border/50">
                {skills.map((group, index) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 border-r border-b border-border/50 bg-background hover:bg-muted/30 transition-colors duration-500 min-h-[200px] flex flex-col gap-4"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map(item => (
                                <span key={item} className="text-lg md:text-xl font-bold uppercase">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

