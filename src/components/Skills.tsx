"use client";

import { motion } from "framer-motion";
import { FaPython, FaDocker, FaLinux, FaWindows } from "react-icons/fa";
import {
    SiPaloaltonetworks,
    SiFortinet,
    SiCitrix,
    SiGrafana,
    SiAnsible,
    SiGnubash,
    SiN8N as SiN8n,
    SiC,
    SiTensorflow,
    SiNumpy,
    SiMysql,
    SiMongodb,
    SiOracle,
} from "react-icons/si";
import { Shield, KeyRound, Code, BrainCircuit, Database, Calculator, Terminal, Activity } from "lucide-react";

const skills = [
    {
        category: "Security & Infrastructure",
        icon: <Shield className="w-6 h-6" />,
        items: [
            { name: "Palo Alto NGFW", icon: <SiPaloaltonetworks /> },
            { name: "FortiGate", icon: <SiFortinet /> },
            { name: "Citrix ADC/WAF", icon: <SiCitrix /> },
            { name: "Zabbix", icon: <Activity /> },
            { name: "Grafana", icon: <SiGrafana /> },
        ],
        className: "md:col-span-2 bg-indigo-900/20 border-indigo-500/20",
    },
    {
        category: "Privileged Access (PAM)",
        icon: <KeyRound className="w-6 h-6" />,
        items: [
            { name: "CyberArk", icon: <KeyRound /> },
            { name: "Wallix", icon: <KeyRound /> },
        ],
        className: "md:col-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Automation & Scripting",
        icon: <Code className="w-6 h-6" />,
        items: [
            { name: "Python", icon: <FaPython /> },
            { name: "Ansible", icon: <SiAnsible /> },
            { name: "Bash", icon: <SiGnubash /> },
            { name: "PowerShell", icon: <Terminal /> },
            { name: "n8n", icon: <SiN8n /> },
            { name: "C", icon: <SiC /> },
        ],
        className: "md:col-span-3 bg-violet-900/20 border-violet-500/20",
    },
    {
        category: "DevOps & OS",
        icon: <FaDocker className="w-6 h-6" />,
        items: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "Pardus", icon: <FaLinux /> },
            { name: "Oracle Linux (OEL)", icon: <SiOracle /> },
            { name: "Windows", icon: <FaWindows /> },
        ],
        className: "md:col-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Data & Analytics",
        icon: <BrainCircuit className="w-6 h-6" />,
        items: [
            { name: "Machine Learning", icon: <BrainCircuit /> },
            { name: "TensorFlow", icon: <SiTensorflow /> },
            { name: "NumPy & Pandas", icon: <SiNumpy /> },
            { name: "MATLAB", icon: <Calculator /> },
        ],
        className: "md:col-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Databases",
        icon: <Database className="w-6 h-6" />,
        items: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Oracle", icon: <SiOracle /> },
        ],
        className: "md:col-span-1 bg-emerald-900/20 border-emerald-500/20",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 md:px-10 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills that fuel my passion</h2>
                    <p className="text-muted-foreground max-w-md">
                        A showcase of my core competencies, from enterprise network security and infrastructure management to automation, scripting, and data analytics.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-3xl border flex flex-col justify-between group hover:border-primary/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm ${skill.className}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {skill.icon}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="relative group/tooltip"
                                        >
                                            <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default">
                                                <span className="text-lg">{item.icon}</span>
                                                {item.name}
                                            </span>

                                            {/* Tooltip */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-800 text-white text-xs rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 z-20">
                                                {item.name}
                                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45 border-b border-r border-white/10"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
