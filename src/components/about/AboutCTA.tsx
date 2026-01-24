import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../../utils/animations';
import { ArrowRight } from 'lucide-react';

export const AboutCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            {/* Normal/Transparent Style (No opaque background) */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden max-w-4xl mx-auto text-center">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                    </div>
                    <div className="relative z-10">
                        <AnimatedSection variant="scaleIn">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                                ¿Listo para empezar <br /> algo grande?
                            </h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                No necesitas una agencia gigante. Necesitas un equipo dedicado que entienda tu visión. Hablemos de tu proyecto.
                            </p>

                            <motion.a
                                href="/contacto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-white/20 transition-all shadow-md"
                            >
                                Comenzar Conversación
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
