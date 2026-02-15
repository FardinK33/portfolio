import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Dashboard",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "Next.js", "Tailwind"],
    },
    {
        title: "Neon AI",
        category: "AI",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        tags: ["WebGL", "Three.js", "GSAP"],
    },
    {
        title: "Lumina",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Shopify", "Liquid", "Vue"],
    },
    {
        title: "DevTools",
        category: "Open Source",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        tags: ["Electron", "TypeScript", "Rust"],
    },
];

export function WorksSection() {
    return (
        <section className="py-24 container px-4 md:px-6">
            <SectionHeading
                title="Works,"
                subtitle="Selected Projects 2023-2025"
                rightElement={<ArrowUpRight className="w-10 h-10 text-muted-foreground" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        index={index}
                        {...project}
                        className={index % 2 === 1 ? "md:mt-24" : ""}
                    />
                ))}
            </div>
        </section>
    );
}
