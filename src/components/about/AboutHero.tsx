import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../../utils/animations';
import HeroHexagon from '../HeroHexagon';

export const AboutHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Normal Background (Transparent to Global or with local hexagons) */}
            {/* We restore the hexagons as requested "se deben ver" */}
            {/* HexagonBackground removed */}

            {/* Subtle gradients only, no opaque solid layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,0,255,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 z-10 text-center relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-6 font-mono text-sm backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0, duration: 0.3 }}
                    >
                        Nuestra Esencia
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        El Futuro se Escribe <br />
                        <span className="text-primary">con Código</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Somos una nueva generación de desarrolladores. Sin burocracia, solo pasión, innovación y resultados excepcionales.
                    </motion.p>
                </div>
            </div>

            {/* Decorative Hexagon - moved outside container */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <HeroHexagon />
            </div>
        </section>
    );
};

export default AboutHero;
