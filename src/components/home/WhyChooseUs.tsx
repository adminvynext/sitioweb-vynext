import { motion } from 'framer-motion';
import { Zap, Shield, Users, Rocket, Target, Award } from 'lucide-react';
import {
  SiReact, SiNodedotjs, SiPython, SiTypescript, SiNextdotjs,
  SiVuedotjs, SiAngular, SiDocker, SiFlutter, SiAmazon,
  SiPostgresql, SiMongodb, SiGraphql, SiTailwindcss, SiAstro
} from 'react-icons/si';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';

const reasons = [
  {
    icon: Zap,
    title: 'Desarrollo Ágil',
    description: 'Metodología ágil que garantiza entregas rápidas y adaptación continua a tus necesidades.',
  },
  {
    icon: Shield,
    title: 'Código de Calidad',
    description: 'Código limpio, documentado y testeado siguiendo las mejores prácticas de la industria.',
  },
  {
    icon: Users,
    title: 'Conocimiento Sólido',
    description: 'Aplicamos conocimientos actualizados en las últimas tecnologías para crear soluciones de calidad.',
  },
  {
    icon: Rocket,
    title: 'Tecnología Moderna',
    description: 'Utilizamos las herramientas y tecnologías más actuales para crear soluciones innovadoras.',
  },
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description: 'Nos enfocamos en generar valor real y resultados medibles para tu negocio.',
  },
  {
    icon: Award,
    title: 'Soporte Continuo',
    description: 'Acompañamiento constante, mantenimiento y actualizaciones para tu proyecto.',
  },
];

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo claro con gradientes sutiles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />

      {/* Hexágonos sutiles */}
      {/* Hexágonos sutiles removed */}
      {/* Hexagon Pattern removed */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 text-[var(--color-secondary)] text-sm font-semibold mb-4"
          >
            Por Qué Vynext
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tu Partner Tecnológico{' '}
            <span className="gradient-text">Ideal</span>
          </h2>

          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Combinamos experiencia, innovación y pasión para crear soluciones que realmente transforman negocios
          </p>
        </AnimatedSection>

        {/* Reasons Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative h-full min-h-[240px] p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    boxShadow: '0 4px 20px rgba(75, 0, 255, 0.08)',
                  }}
                >
                  {/* Glow Effect sutil */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-secondary)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-secondary)]/5 transition-all duration-500" />

                  <div className="relative">
                    {/* Icon limpio */}
                    <motion.div
                      className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] mb-4 shadow-lg shadow-primary/20"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)]">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Tech Stack */}
        <AnimatedSection variant="fadeInUp" className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-[var(--color-text-primary)]">
            Tecnologías que Dominamos
          </h3>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    boxShadow: `0 20px 60px ${tech.color}40`
                  }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: tech.color }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={48} style={{ color: tech.color }} />
                  </motion.div>

                  {/* Name */}
                  <span className="relative z-10 text-sm font-semibold text-gray-900 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            className="text-center text-gray-600 mt-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Y muchas más tecnologías según las necesidades de tu proyecto
          </motion.p>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection variant="fadeInUp" className="mt-20">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Listo para Empezar tu Proyecto?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Cuéntanos tu idea y te ayudaremos a convertirla en una solución digital exitosa
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contacto"
                  className="px-8 py-4 rounded-xl bg-white text-[var(--color-primary)] font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contactar Ahora
                </motion.a>

                <motion.a
                  href="/planes"
                  className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Planes
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
