import { motion } from 'framer-motion';
import { Smartphone, Zap, Layers } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';

const features = [
    {
        title: "iOS y Android en simultáneo",
        description: "Utilizamos tecnologías líderes como React Native para desarrollar un único código base que se despliega en ambas tiendas. Reduce costos y tiempos de lanzamiento sin sacrificar calidad.",
        icon: Layers,
        color: "blue"
    },
    {
        title: "Experiencia Nativa Fluida",
        description: "Tus usuarios no notarán la diferencia. Nuestras aplicaciones ofrecen el rendimiento, animaciones y gestos nativos que los usuarios esperan en una aplicación de primer nivel.",
        icon: Smartphone,
        color: "purple"
    },
    {
        title: "Mantenimiento Simplificado",
        description: "Actualiza tu aplicación más rápido. Al tener una base de código unificada, las correcciones y nuevas funcionalidades se implementan una sola vez y se reflejan en ambas plataformas.",
        icon: Zap,
        color: "amber"
    }
];

export default function AppsFeatures() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 xl:px-20">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Una sola App, <span className="text-primary">Múltiples Mercados</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Aprovecha el poder del desarrollo híbrido para escalar tu negocio en todos los dispositivos móviles.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <motion.div
                                className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                                whileHover={{ y: -5 }}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${feature.color}-50 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon size={28} className="stroke-[1.5]" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
