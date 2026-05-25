"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface Certification {
    name: string;
    issuer: string;
    year: string;
    logo: string;
    transparentBg?: boolean;
}

const certifications: Certification[] = [
    {
        name: "PCNA - Certified Network Security Administrator",
        issuer: "Palo Alto Networks",
        year: "2024",
        logo: "/paloalto_logo.png",
        transparentBg: true
    },
    {
        name: "Firewall: Troubleshooting (EDU-330)",
        issuer: "Palo Alto Networks",
        year: "2025",
        logo: "/paloalto_logo.png",
        transparentBg: true
    },
    {
        name: "Academy Network Security Fundamentals",
        issuer: "Palo Alto Networks",
        year: "2025",
        logo: "/paloalto_logo.png",
        transparentBg: true
    },
    {
        name: "Certified Cybersecurity Apprentice",
        issuer: "Palo Alto Networks",
        year: "2025",
        logo: "/paloalto_logo.png",
        transparentBg: true
    },
    {
        name: "Fortinet Certified Fundamentals (NSE 1-3)",
        issuer: "Fortinet",
        year: "2025",
        logo: "/fortinet_logo.png",
        transparentBg: true
    },
    {
        name: "NetScaler Core Skills",
        issuer: "Pluralsight",
        year: "2025",
        logo: "/pluralsight_logo.png",
        transparentBg: true
    },
    {
        name: "CyberArk Certified IAM & PAM Professional",
        issuer: "CyberArk",
        year: "2024",
        logo: "/cyberark_logo.png",
        transparentBg: true
    },
    {
        name: "Zabbix 6 Monitoring: Zero to Advanced",
        issuer: "Udemy",
        year: "2023",
        logo: "/udemy_logo.png",
    },
    {
        name: "Intro to FortiManager, Fortigate, and PAM",
        issuer: "Udemy",
        year: "2023",
        logo: "/udemy_logo.png",
    },
];

export default function Certifications() {
    return (
        <section className="py-20 px-4 md:px-10 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        <Award className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                        Certifications
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        Professional credentials that validate my knowledge and dedication to industry standards.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-primary/50 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-primary/10 transition-all flex items-center gap-4 backdrop-blur-sm"
                        >
                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full p-1.5 flex items-center justify-center overflow-hidden shrink-0 ${cert.transparentBg ? '' : 'bg-white'}`}>
                                <img
                                    src={cert.logo}
                                    alt={`${cert.issuer} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>{cert.issuer}</span>
                                    {/* <span>{cert.year}</span> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
