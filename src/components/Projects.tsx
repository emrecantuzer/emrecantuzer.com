"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SWIPE_CONFIDENCE_THRESHOLD, swipePower } from "@/lib/utils";

const projects = [
    {
        title: "ThreatLens (SuriGuard)",
        category: "Network Telemetry Application",
        description: "Modern network telemetry monitoring application built with React, Vite, and SQLite designed to parse, aggregate, and visualize live Suricata IDS/IPS logs for real-time threat intelligence mapping.",
        link: "#",
        color: "bg-red-500",
    },
    {
        title: "PAM Migration & Orchestration",
        category: "Corporate Security Evaluation",
        description: "Corporate evaluation and migration planning involving Wallix and CyberArk, including technical evaluation reports and troubleshooting credential rotation across enterprise network devices.",
        link: "#",
        color: "bg-orange-500",
    },
    {
        title: "Classifying Encrypted Network Flows",
        category: "Machine Learning & Traffic Analysis",
        description: "Advanced intrusion detection research utilizing self-supervised machine learning models to accurately categorize modern encrypted network protocols (QUIC, HTTPS) where traditional signature-based inspection fails.",
        link: "#",
        color: "bg-green-500",
    },
    {
        title: "AI-based Diagnostics & PWM Encoding",
        category: "Academic Research",
        description: "Academic research projects focusing on AI-based data science (breast cancer diagnosis) and software-defined communications.",
        link: "#",
        color: "bg-purple-500",
    },
];


export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        const newIndex = currentIndex + newDirection;
        if (newIndex >= 0 && newIndex < projects.length) {
            setDirection(newDirection);
            setCurrentIndex(newIndex);
        }
    };

    const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
            paginate(1);
        } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
            paginate(-1);
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 200 : -200,
            opacity: 0
        })
    };

    return (
        <section id="projects" className="py-20 px-4 md:px-10 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Impressive Works</h2>
                        <p className="text-muted-foreground max-w-md">
                            Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow.
                        </p>
                    </div>
                    <Link href="https://github.com/emrecantuzer?tab=repositories" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
                        View all repositories <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Mobile Swipe Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 0.25, ease: "easeOut" },
                                    opacity: { duration: 0.15 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}
                                className="cursor-grab active:cursor-grabbing touch-pan-y"
                            >
                                <ProjectCard project={projects[currentIndex]} index={currentIndex} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                            onClick={() => paginate(-1)}
                            disabled={currentIndex === 0}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex gap-2">
                            {projects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${idx === currentIndex ? "bg-primary" : "bg-white/20"
                                        }`}
                                    aria-label={`Go to project ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(1)}
                            disabled={currentIndex === projects.length - 1}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="https://github.com/emrecantuzer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-medium flex items-center gap-2 min-h-[44px] touch-manipulation"
                    >
                        And many more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group h-full"
        >
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="relative p-6 md:p-8 min-h-[280px] h-full rounded-2xl bg-zinc-900/50 border border-white/10 group-hover:border-primary/50 group-hover:bg-zinc-900/80 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all flex flex-col overflow-hidden backdrop-blur-sm">
                    {/* Arkaplandaki hafif renk parlaması */}
                    <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${project.color} opacity-10 blur-[50px] group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Header: İkonlar */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className={`w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                            <Github className="w-6 h-6" />
                        </div>
                        <div className="p-2 rounded-full border border-white/10 group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-primary font-mono text-xs md:text-sm mb-4">&gt; {project.category}</p>
                        <p className="text-sm text-white/60 leading-relaxed mt-auto">{project.description}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
