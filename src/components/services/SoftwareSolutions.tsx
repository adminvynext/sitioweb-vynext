import { motion } from 'framer-motion';
import { Database, TrendingUp, Receipt } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';

const solutions = [
    {
        title: "Automatización de inventarios y ventas",
        description: "Olvídate de las hojas de cálculo. Implementamos sistemas robustos que controlan tu stock en tiempo real, gestionan ventas y generan reportes automáticos para tomar decisiones inteligentes.",
        icon: Database,
        color: "blue"
    },
    {
        title: "Sistemas CRM personalizados",
        description: "Centraliza la información de tus clientes. Un CRM a la medida te permite dar seguimiento a prospectos, automatizar correos y mejorar la retención de clientes con herramientas diseñadas para tu flujo de venta único.",
        icon: TrendingUp,
        color: "purple"
    },
    {
        title: "Integración de facturación electrónica (FEL)",
        description: "Cumple con la SAT sin complicaciones. Integramos facturación electrónica directa en tu sistema, permitiendo emitir, anular y enviar facturas automáticamente a tus clientes en segundos.",
        icon: Receipt,
        color: "green"
    }
];

export default function SoftwareSolutions() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 xl:px-20">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Soluciones Tecnológicas que <span className="text-primary">Impulsan tu Negocio</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Desarrollamos software específico para resolver los problemas reales de tu operación diaria.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <motion.div
                                className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                                whileHover={{ y: -5 }}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${solution.color}-50 text-${solution.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                    <solution.icon size={28} className="stroke-[1.5]" />
                                </div>

                                {/* H3 for SEO keywords */}
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                                    {solution.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
