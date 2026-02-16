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
    description?: string;
    hoverText?: string;
    className?: string;
    index?: number;
}

export function ProjectCard({
    title,
    category,
    image,
    tags,
    description,
    hoverText,
    className,
    index = 0,
}: ProjectCardProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={cn("group relative", className)}
        >
            <div className={cn(
                "grid grid-cols-1 gap-8 md:gap-16 items-center",
                // Even (Image Left): Image (0.8fr) | Content (1.2fr)
                // Odd (Image Right): Content (1.2fr) | Image (0.8fr)
                isEven ? "md:grid-cols-[0.8fr_1.2fr]" : "md:grid-cols-[1.2fr_0.8fr]"
            )}>
                {/* Image Section */}
                <div className={cn(
                    "relative overflow-hidden rounded-xl bg-muted aspect-[16/10] group/image cursor-pointer shadow-lg transition-all duration-500 hover:shadow-xl",
                    !isEven ? "md:order-2" : "md:order-1"
                )}>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center p-6 text-center backdrop-blur-[2px]">
                        <p className="text-white font-bold text-lg md:text-2xl tracking-wide transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                            {hoverText || "View Project"}
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10" />
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                    />
                </div>

                {/* Content Section */}
                <div className={cn(
                    "flex flex-col justify-center space-y-6",
                    !isEven ? "md:order-1 md:text-right md:items-end" : "md:order-2 md:text-left md:items-start"
                )}>
                    <div className="space-y-2">
                        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                            <span>0{index + 1}</span>
                            <span className="w-12 h-[1px] bg-border"></span>
                            <span>{category}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                            {title}
                        </h3>
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                        {description}
                    </p>

                    <div className={cn(
                        "flex gap-2 flex-wrap",
                        !isEven ? "justify-end" : "justify-start"
                    )}>
                        {tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="rounded-full px-4 py-1 uppercase text-[10px] tracking-wider border-border bg-background/50 backdrop-blur-sm">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
