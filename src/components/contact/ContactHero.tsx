import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../../utils/animations';
import { Mail, MessageCircle } from 'lucide-react';
import HeroHexagon from '../HeroHexagon';

export const ContactHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Normal Background (Transparent with hexagons) */}
            {/* HexagonBackground removed */}

            {/* Subtle gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,0,255,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 z-10 text-center relative">
                <AnimatedSection variant="fadeInUp">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-6 font-mono text-sm backdrop-blur-sm"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0, duration: 0.3 }}
                    >
                        <Mail className="w-4 h-4" />
                        <span>Estamos para ayudarte</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-display">
                        Hablemos de tu{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-700">
                            Proyecto
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        ¿Tienes una idea? Nosotros tenemos la experiencia y la pasión para hacerla realidad.
                        Cuéntanos qué necesitas.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <a
                            href="#formulario"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-bold text-lg text-white hover:shadow-[0_0_30px_rgba(75,0,255,0.5)] transition-all"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Enviar Mensaje
                        </a>
                        <a
                            href="#info"
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all text-primary hover:shadow-lg"
                        >
                            Ver Información
                        </a>
                    </motion.div>
                </AnimatedSection>
            </div>

            {/* Decorative element - moved outside container */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <HeroHexagon />
            </div>
        </section>
    );
};

export default ContactHero;
