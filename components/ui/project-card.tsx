import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    tags: string[];
    className?: string;
    index?: number;
}

export function ProjectCard({
    title,
    category,
    image,
    tags,
    className,
    index = 0,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={cn("group cursor-pointer space-y-4", className)}>
                {/* Header */}
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">0{index + 1} / {category}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                    {title}
                </h3>

                {/* Image Container with Glow Effect */}
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/3]">
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 z-10" />
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Footer / Tags */}
                <div className="flex gap-2 flex-wrap pt-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-md uppercase text-[10px] tracking-wider font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
