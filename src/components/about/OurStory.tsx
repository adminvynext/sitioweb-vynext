import React from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';
import { Code, Lightbulb, Rocket } from 'lucide-react';

const milestones = [
    {
        year: '2025',
        title: 'El Origen',
        description: 'Dos estudiantes, una visión compartida: transformar ideas complejas en experiencias digitales fluidas.',
        icon: Lightbulb
    },
    {
        year: 'Hoy',
        title: 'Nuestra Filosofía',
        description: 'No somos una agencia masiva. Somos artesanos digitales, dedicando tiempo y precisión a cada línea de código.',
        icon: Code
    },
    {
        year: 'Futuro',
        title: 'La Meta',
        description: 'Convertirnos en el referente de innovación web, demostrando que el talento joven impulsa el cambio real.',
        icon: Rocket
    }
];

export const OurStory = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Fondo Blur Opaque for Section 2 */}
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-cyan-50/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(75,0,255,0.05),transparent_60%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection variant="fadeInUp" className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nuestra Historia <span className="text-primary">(Comienza Aquí)</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cada gran proyecto tiene un inicio humilde. Esta es la semilla de lo que estamos construyendo.
                    </p>
                </AnimatedSection>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

                    <StaggerContainer className="space-y-12 relative z-10">
                        {milestones.map((item, index) => (
                            <StaggerItem key={index} className="flex flex-col md:flex-row items-center gap-8 group">
                                {/* Year/Icon Desktop Left */}
                                <div className={`flex-1 text-center md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                                    <h3 className="text-4xl font-bold text-primary opacity-20 group-hover:opacity-100 transition-opacity duration-300 font-display">
                                        {item.year}
                                    </h3>
                                </div>

                                {/* Center Node */}
                                <div className="relative md:order-2 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-white border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(75,0,255,0.1)]">
                                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1 md:text-right'}`}>
                                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl hover:border-primary/30 transition-colors shadow-sm">
                                        <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
