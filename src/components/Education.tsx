"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        school: "Istanbul Technical University",
        degree: "MSc. in Cybersecurity Engineering / Network Security (BGK)",
        period: "July 2023 – Ongoing",
        location: "Istanbul, Turkey",
        description: "Academic focus with mentors like Prof. Kemal Bıçakçı and Dr. İbrahim Çelikbilek.",
        logo: "/itu_logo.png",
        transparentBg: true
    },
    {
        school: "Izmir Institute of Technology",
        degree: "BSc. in Electronics and Communication Engineering",
        period: "September 2017 – January 2023",
        location: "Izmir, Turkey",
        description: "",
        logo: "/iyte_logo.png",
        transparentBg: true
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 px-4 md:px-10 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        <GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                        Education
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        My academic journey and formal foundation in engineering and cybersecurity.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Animated Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
                    />

                    <div className="space-y-6 md:space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative pl-6 md:pl-12 group"
                            >
                                {/* Animated Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                                    className="absolute -left-[7px] md:left-[9px] top-6 md:top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform"
                                >
                                    <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:animate-ping group-hover:opacity-75" />
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-4 md:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-primary/50 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-primary/10 transition-all backdrop-blur-sm"
                                >
                                    <div className="flex flex-col gap-4">
                                        {/* Top row: Logo + Degree/School */}
                                        <div className="flex items-start gap-3 md:gap-4">
                                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full p-1.5 flex items-center justify-center overflow-hidden shrink-0 ${edu.transparentBg ? '' : 'bg-white'}`}>
                                                <img
                                                    src={edu.logo}
                                                    alt={`${edu.school} logo`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-primary font-medium text-sm md:text-base mt-1">{edu.school}</p>
                                            </div>
                                        </div>

                                        {/* Bottom row: Period + Location + Description */}
                                        <div className="flex flex-col gap-2 pl-0 md:pl-20">
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground text-xs md:text-sm">
                                                <p className="font-medium">{edu.period}</p>
                                                <p className="text-white/40">•</p>
                                                <p>{edu.location}</p>
                                            </div>
                                            {edu.description && (
                                                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                                                    {edu.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}