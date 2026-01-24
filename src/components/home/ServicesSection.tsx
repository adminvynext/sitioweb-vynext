import { motion } from 'framer-motion';
import { Code2, Globe, Laptop, Database, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';

const services = [
  {
    icon: Globe,
    title: 'Diseño de Páginas Web',
    description: 'Diseño de páginas web profesionales y modernas en Guatemala. Sitios responsivos que convierten visitantes en clientes.',
    features: ['Landing Pages', 'E-commerce', 'Web Apps', 'PWAs'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code2,
    title: 'Software a la Medida',
    description: 'Desarrollo de software a la medida para empresas. Soluciones personalizadas que se adaptan a tus necesidades exactas.',
    features: ['Software personalizado', 'APIs REST', 'Microservicios', 'Integraciones'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Automatización de Procesos',
    description: 'Sistemas empresariales robustos. Automatización de procesos empresariales para optimizar tu operación y reducir costos.',
    features: ['ERP', 'CRM', 'Gestión', 'Analytics'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles (iOS/Android)',
    description: 'Desarrollo de aplicaciones móviles en Guatemala. Apps nativas y multiplataforma que conectan con tus usuarios.',
    features: ['iOS', 'Android', 'React Native', 'Flutter'],
    color: 'from-orange-500 to-red-500',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 overflow-hidden">
      {/* Fondo claro con degradado sutil */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/3 via-transparent to-primary/3" />

      {/* Hexágonos sutiles */}
      {/* Hexágonos sutiles removed */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-semibold mb-4"
          >
            Nuestros Servicios
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Soluciones Digitales{' '}
            <span className="gradient-text">Completas</span>
          </h2>

          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Ofrecemos un amplio espectro de servicios tecnológicos para llevar tu negocio al siguiente nivel
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="group relative h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Brillo animado en hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(75,0,255,0.05) 0%, transparent 70%)',
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-shadow duration-500`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  >
                    <Icon size={32} className="text-white relative z-10" />
                    <div className="absolute inset-0 rounded-xl bg-white/20 blur-sm" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs bg-gray-100 text-[var(--color-text-secondary)] border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href="/servicios"
                    aria-label={`Más información sobre ${service.title}`}
                    className="inline-flex items-center space-x-2 text-[var(--color-secondary)] font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    <span>Más información</span>
                    <ArrowRight size={16} />
                  </motion.a>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection variant="fadeInUp" className="text-center mt-16">
          <motion.a
            href="/servicios"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl gradient-primary text-white font-semibold text-lg shadow-lg shadow-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Ver Todos los Servicios</span>
            <ArrowRight size={20} />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
