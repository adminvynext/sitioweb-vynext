import React from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';
import { Heart, Search, Zap } from 'lucide-react';

const values = [
    {
        title: 'Pasión',
        description: 'Amamos lo que hacemos. Cada proyecto no es solo un trabajo, es una oportunidad para crear algo memorable.',
        icon: Heart,
        color: 'text-rose-500'
    },
    {
        title: 'Transparencia',
        description: 'Sin promesas vacías ni letra pequeña. Comunicación clara y honesta desde el primer "Hola".',
        icon: Search,
        color: 'text-blue-400'
    },
    {
        title: 'Innovación',
        description: 'Siempre aprendiendo. Usamos las últimas tecnologías para que tu sitio no solo se vea bien hoy, sino mañana también.',
        icon: Zap,
        color: 'text-yellow-400'
    }
];

export const MissionValues = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-transparent">
            {/* Normal/Transparent Style (No opaque background, letting global hex show) */}

            <div className="container mx-auto px-4 relative z-10">
                {/* Mission Statement */}
                <AnimatedSection variant="fadeInUp" className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Nuestra Misión</h2>
                    <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed italic">
                        "Empoderar ideas emprendedoras a través de tecnología accesible, diseño premium y una experiencia digital sin fricciones."
                    </p>
                </AnimatedSection>

                {/* Values Grid */}
                <div className="text-center mb-12">
                    <span className="text-sm font-mono text-primary tracking-widest uppercase">Nuestros Valores</span>
                    <h3 className="text-3xl font-bold mt-2">Los Pilares de Vynext</h3>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <StaggerItem key={index}>
                            <div className="bg-white border border-gray-200 p-8 rounded-3xl hover:border-primary/50 transition-colors duration-300 h-full shadow-lg">
                                <div className={`w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 ${value.color} shadow-sm`}>
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default MissionValues;
