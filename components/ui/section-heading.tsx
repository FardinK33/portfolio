import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    rightElement?: React.ReactNode;
}

export function SectionHeading({
    title,
    subtitle,
    className,
    rightElement,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-20",
                className
            )}
        >
            <div className="flex flex-col gap-2">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter"
                >
                    {title}
                </motion.h2>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-muted-foreground text-sm uppercase tracking-wider max-w-xs"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
            {rightElement && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {rightElement}
                </motion.div>
            )}
        </div>
    );
}
