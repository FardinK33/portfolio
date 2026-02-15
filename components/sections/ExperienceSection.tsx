import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const experience = [
    {
        role: "Senior Engineer",
        company: "TechCorp Solutions",
        period: "2023 - Present",
        description: "Leading the frontend team in re-architecting the core product using Next.js and WebGL. Improved performance by 40% and established a comprehensive design system.",
    },
    {
        role: "Creative Dev",
        company: "Studio Alpha",
        period: "2021 - 2023",
        description: "Collaborated with designers to build award-winning marketing sites. Utilized Three.js and GSAP for high-end animations and interactive storytelling experiences.",
    },
    {
        role: "Web Developer",
        company: "Freelance",
        period: "2019 - 2021",
        description: "Delivered custom WordPress themes and Shopify stores for over 20 clients. Managed full project lifecycles from concept to deployment.",
    },
];

export function ExperienceSection() {
    return (
        <section className="py-24 container px-4 md:px-6">
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
        </section>
    );
}
