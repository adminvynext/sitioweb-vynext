import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';
import HexagonPattern from '../HexagonPattern';

export default function AppsCTA() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <HexagonPattern />

            <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto">
                        {/* CTA Principal */}
                        <div className="bg-gradient-to-br from-[#10B981] to-[#3B82F6] p-12 rounded-3xl text-center mb-8 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                }} />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
                                    Convierte tu idea en una App
                                </h2>
                                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                                    Desde el diseño de la interfaz hasta la publicación en las tiendas. Te acompañamos en todo el proceso.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.a
                                        href="/contacto"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Cotizar App
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>

                        {/* Features Badges */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <AnimatedSection delay={0.1}>
                                <div className="text-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900 mb-1">Store & Play</div>
                                    <div className="text-sm text-gray-500">Publicación garantizada</div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <div className="text-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3 text-secondary">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900 mb-1">Desarrollo Rápido</div>
                                    <div className="text-sm text-gray-500">Metodología Ágil</div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3}>
                                <div className="text-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900 mb-1">Interfaz Premium</div>
                                    <div className="text-sm text-gray-500">Diseño UX/UI de alto nivel</div>
                                </div>
                            </AnimatedSection>
                        </div>

                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
