import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiPython, SiTypescript, SiNextdotjs,
  SiVuedotjs, SiAngular, SiDocker, SiFlutter, SiAmazon,
  SiPostgresql, SiMongodb, SiGraphql, SiTailwindcss, SiAstro
} from 'react-icons/si';
import { AnimatedSection } from '../../utils/animations';

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

export default function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo claro con degradado sutil */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-4"
          >
            Stack Tecnológico
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Tecnologías que <span className="gradient-text">Dominamos</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con las tecnologías más modernas y demandadas del mercado
          </p>
        </AnimatedSection>

        {/* Tech Grid */}
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

        {/* Bottom Text */}
        <motion.p
          className="text-center text-gray-600 mt-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Y muchas más tecnologías según las necesidades de tu proyecto
        </motion.p>
      </div>
    </section>
  );
}
