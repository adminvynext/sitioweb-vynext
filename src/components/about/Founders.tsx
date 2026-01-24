import React from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';
import { Github, Linkedin, Twitter } from 'lucide-react';

const founders = [
    {
        role: 'Co-Founder & Tech Lead',
        name: 'Fundador 1', // Placeholder para usuario
        bio: 'Apasionado por la arquitectura de software y el clean code. Convierte café en soluciones escalables.',
        skills: ['Astro', 'React', 'Node.js']
    },
    {
        role: 'Co-Founder & Design Lead',
        name: 'Fundador 2', // Placeholder para usuario
        bio: 'Obsesionado con la experiencia de usuario y los micro-detalles. Cree que el diseño salva vidas digitales.',
        skills: ['UI/UX', 'Tailwind', 'Motion']
    }
];

export const Founders = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Fondo Blur Opaque for Section 4 */}
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 via-white to-purple-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(75,0,255,0.05),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection variant="fadeInUp" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Mentes Creativas</h2>
                    <p className="text-gray-600">El equipo detrás del código.</p>
                </AnimatedSection>

                <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {founders.map((founder, index) => (
                        <StaggerItem key={index}>
                            <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-colors duration-500 shadow-sm">

                                {/* Abstract Avatar Header */}
                                <div className="h-32 -mx-8 -mt-8 mb-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-200">
                                    <div className="absolute inset-0 opacity-30 bg-[url('/grid.svg')] bg-center" />
                                    {/* Hexagon Placeholder */}
                                    <div className="w-20 h-20 relative">
                                        <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary fill-white stroke-2 drop-shadow-[0_0_15px_rgba(75,0,255,0.2)]">
                                            <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-primary">
                                            {founder.name[0]}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="mb-4">
                                        <span className="text-primary text-xs font-mono uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">
                                            {founder.role}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-gray-900">
                                        {founder.name}
                                    </h3>

                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        "{founder.bio}"
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {founder.skills.map((skill, i) => (
                                            <span key={i} className="text-xs bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-gray-600">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Socials (Optional Placeholders) */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                                        <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Github size={18} /></a>
                                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={18} /></a>
                                        <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors"><Twitter size={18} /></a>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default Founders;
