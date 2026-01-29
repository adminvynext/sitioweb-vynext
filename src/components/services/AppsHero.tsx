import { motion } from 'framer-motion';
import { Smartphone, ArrowDown } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';
import HeroHexagon from '../HeroHexagon';

export default function AppsHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Fondo claro degradado con acentos sutiles */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,0,255,0.06),transparent_50%)]" />

            {/* Hexágonos */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <HeroHexagon />
            </div>

            {/* Overlay muy sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60" />

            <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-24 relative z-10">
                <AnimatedSection className="text-center mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Smartphone className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Tecnología Híbrida Avanzada</span>
                    </motion.div>

                    {/* Título */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="text-4xl sm:text-5xl md:text-[4.5rem] leading-tight font-bold mb-8"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-700 inline-block">
                            Desarrollo de Aplicaciones Móviles para iOS y Android
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Llega a todos tus clientes con una sola inversión.
                        <span className="block mt-2 text-gray-500">Creamos apps nativas de alta calidad que funcionan perfectamente en ambas plataformas.</span>
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                    >
                        <div className="text-center p-6 rounded-2xl bg-primary/5 backdrop-blur-xl border border-primary/20">
                            <div className="text-4xl font-bold text-primary mb-2">2x1</div>
                            <div className="text-sm text-gray-600 font-medium">iOS + Android</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-secondary/5 backdrop-blur-xl border border-secondary/20">
                            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                            <div className="text-sm text-gray-600 font-medium">Nativo</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-primary/5 backdrop-blur-xl border border-primary/20">
                            <div className="text-4xl font-bold text-primary mb-2">-40%</div>
                            <div className="text-sm text-gray-600 font-medium">Costos y Tiempo</div>
                        </div>
                    </motion.div>

                    {/* Indicador de scroll */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-16 flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                        >
                            <span className="text-sm font-medium">Conoce los beneficios</span>
                            <ArrowDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </AnimatedSection>
            </div>

            {/* Gradiente inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
}
