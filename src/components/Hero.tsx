"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-mono text-xs md:text-sm mb-6">
                        <Terminal className="w-4 h-4" />
                        <span>root@emre:~# whoami</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
                        Emre Can <br />
                        <span className="text-muted-foreground">Tüzer</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-mono text-white/80 mb-4">
                        &gt; Senior Network & Security Operations Engineer_
                    </h2>
                    <p className="text-base text-muted-foreground max-w-md mb-8 leading-relaxed font-mono">
                        Result-oriented Electronics and Communication Engineer specializing in network security architectures, critical infrastructure protection, and network automation.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse"></span>
                            <span className="w-2 h-2 rounded-full bg-yellow-500/80 animate-pulse delay-75"></span>
                            <span className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse delay-150"></span>
                        </div>
                        <span className="text-sm text-muted-foreground">Based in Turkey</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-[200px] w-[200px] md:h-[300px] md:w-[300px] mx-auto rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20 transition-all duration-500"
                >
                    <Image
                        src="/emre_hero.webp"
                        alt="Emre Can Tüzer - Cybersecurity Professional"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </motion.div>
            </div>

            {/* Arrow removed as per request */}
        </section>
    );
}
