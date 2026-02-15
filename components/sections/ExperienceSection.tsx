import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const experience = [
    {
        role: "Software Development Intern",
        company: "Eulogik | Bhopal",
        period: "2025 - Present", // Adjust year if needed based on 2025-2026
        description: "Engineered backend services for OHLCV financial market data. Implemented technical indicators for automated trading analysis and built advanced order automation features. Designed a gamified achievement system and improved UI consistency aligned with Figma designs.",
    },
    {
        role: "Teaching Assistant",
        company: "Digital Ocean Computer Academy", // Placeholder if not specified
        period: "2022 - 2023",
        description: "Mentored 40+ students in programming & computer fundamentals. Simplified complex technical concepts and delivered hands-on coding support.",
    },
];

const achievements = [
    "150+ algorithmic problems solved",
    "District-level Table Tennis Champion",
    "Inter-college Volleyball Champion",
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 container px-4 md:px-6">
            <SectionHeading title="EXPERIENCE," subtitle="Career History" />

            <div className="relative border-l border-border/50 ml-4 md:ml-12 space-y-12">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12 group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-foreground transition-colors duration-300" />

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">{job.role}</h3>
                                <p className="text-muted-foreground font-mono text-sm">{job.company}</p>
                            </div>

                            <Badge variant="outline" className="w-fit h-fit py-1 px-3 border-muted-foreground/30">
                                {job.period}
                            </Badge>
                        </div>

                        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 ml-4 md:ml-12 pl-8 md:pl-12 border-l border-border/50">
                <SectionHeading title="ACHIEVEMENTS," subtitle="Recognitions" className="mb-8" />
                <div className="grid gap-4">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 group"
                        >
                            <span className="h-px w-8 bg-muted-foreground group-hover:w-12 transition-all duration-300" />
                            <p className="text-lg md:text-xl font-medium">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
