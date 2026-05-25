"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 md:px-10 min-h-[80vh] flex flex-col justify-between">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-2 text-primary font-mono text-sm mb-6">
                        <Lock className="w-4 h-4" />
                        <span>SECURE_CONNECTION_ESTABLISHED</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Initiate Handshake? <br />
                        Let's secure your network.
                    </h2>

                    <Link
                        href="mailto:contact@emrecantuzer.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        Get in touch
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div>
                            <p className="text-primary font-mono text-sm mb-2">&gt; securing critical infrastructures...</p>
                            <p className="text-[12vw] leading-none font-bold tracking-tighter text-white flex overflow-hidden py-4">
                                {"Emre Can".split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{
                                            duration: 2.5,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 0,
                                            delay: index * 0.15,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 md:gap-6 mb-4">
                            <Link href="https://linkedin.com/in/emrecantuzer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors py-2 px-3 min-h-[44px] min-w-[44px] flex items-center touch-manipulation">LinkedIn</Link>
                            <Link href="https://github.com/emrecantuzer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors py-2 px-3 min-h-[44px] min-w-[44px] flex items-center touch-manipulation">GitHub</Link>
                            <Link href="https://x.com/emrecantuzer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors py-2 px-3 min-h-[44px] min-w-[44px] flex items-center touch-manipulation">X (Twitter)</Link>
                            <Link href="https://medium.com/@emrecantzer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors py-2 px-3 min-h-[44px] min-w-[44px] flex items-center touch-manipulation">Medium</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
