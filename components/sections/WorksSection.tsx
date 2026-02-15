import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "MockAI",
        category: "AI Interview Simulation Engine",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop", // Placeholder
        tags: ["React", "Zustand", "Node.js", "Express", "MongoDB", "Gemini API"],
        description: "An intelligent mock interview platform that evaluates performance using voice interaction and AI-generated feedback.",
        hoverText: "Simulating interviews with AI-driven intelligence.",
    },
    {
        title: "Talkia",
        category: "Realtime AI Chat Platform",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", // Placeholder or use valid Unsplash ID
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.io"],
        description: "A production-ready chat application with live messaging, secure authentication, and AI-powered conversation assistance.",
        hoverText: "Built for real-time conversations at scale.",
    },
];

export function WorksSection() {
    return (
        <section id="works" className="py-24 container px-4 md:px-6">
            <div className="border-b border-border/50 pb-12 mb-12">
                <SectionHeading
                    title="Works,"
                    subtitle="Selected Projects"
                    rightElement={<ArrowUpRight className="w-10 h-10 text-muted-foreground" />}
                    className="mb-0"
                />
            </div>

            <div className="flex flex-col gap-24 md:gap-32">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}
