import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code2, Globe, Database, Smartphone, X, Check, ArrowRight, Zap } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';

const services = [
  {
    id: 'software',
    icon: Code2,
    title: 'Desarrollo de Software',
    shortDesc: 'Software personalizado que automatiza procesos y optimiza tu negocio.',
    fullDesc: 'Desarrollamos software a medida que se adapta perfectamente a las necesidades específicas de tu empresa. Desde sistemas de gestión hasta aplicaciones complejas, utilizamos las mejores prácticas y tecnologías modernas.',
    color: 'from-purple-500 to-pink-500',
    technologies: ['Python', 'Node.js', 'Java', 'C#', '.NET', 'Go'],
    useCases: [
      'Sistemas de gestión interna',
      'Automatización de procesos',
      'Integraciones con APIs',
      'Software de análisis de datos',
      'Herramientas de productividad'
    ],
    benefits: [
      'Solución 100% personalizada',
      'Escalable y mantenible',
      'Código limpio y documentado',
      'Soporte continuo'
    ]
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Desarrollo Web',
    shortDesc: 'Sitios web modernos, rápidos y responsivos que convierten visitantes en clientes.',
    fullDesc: 'Creamos experiencias web excepcionales que combinan diseño atractivo con funcionalidad superior. Desde landing pages hasta aplicaciones web complejas, cada proyecto está optimizado para rendimiento y conversión.',
    color: 'from-blue-500 to-cyan-500',
    technologies: ['React', 'Next.js', 'Vue', 'Astro', 'TailwindCSS', 'TypeScript'],
    useCases: [
      'Sitios web corporativos',
      'Landing pages de conversión',
      'E-commerce completos',
      'Portales web',
      'Aplicaciones web (SaaS)'
    ],
    benefits: [
      'Diseño responsive',
      'Optimizado para SEO',
      'Carga ultra rápida',
      'Experiencia de usuario excepcional'
    ]
  },
  {
    id: 'sistemas',
    icon: Database,
    title: 'Sistemas Empresariales',
    shortDesc: 'Sistemas robustos y escalables para gestionar y hacer crecer tu empresa.',
    fullDesc: 'Implementamos sistemas empresariales completos que integran todos los aspectos de tu negocio. ERP, CRM, sistemas de inventario y más, diseñados para crecer con tu empresa.',
    color: 'from-green-500 to-emerald-500',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'GraphQL'],
    useCases: [
      'ERP (Enterprise Resource Planning)',
      'CRM (Customer Relationship Management)',
      'Sistemas de inventario',
      'Gestión de recursos humanos',
      'Business Intelligence'
    ],
    benefits: [
      'Centraliza tu información',
      'Mejora la toma de decisiones',
      'Automatiza flujos de trabajo',
      'Aumenta la productividad'
    ]
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    shortDesc: 'Apps nativas y multiplataforma para iOS y Android que conectan con tus clientes.',
    fullDesc: 'Desarrollamos aplicaciones móviles potentes y elegantes que ofrecen experiencias nativas. Ya sea una app para tu negocio o un producto digital, creamos soluciones móviles que los usuarios aman.',
    color: 'from-orange-500 to-red-500',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store/Play Store'],
    useCases: [
      'Apps de servicios',
      'E-commerce móvil',
      'Apps corporativas internas',
      'Apps de productividad',
      'Apps de entretenimiento'
    ],
    benefits: [
      'Funcionamiento offline',
      'Notificaciones push',
      'Geolocalización',
      'Integración con hardware del dispositivo'
    ]
  }
];

export default function ServiceDetail() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const selected = services.find(s => s.id === selectedService);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo claro con degradado sutil */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas para todas tus necesidades tecnológicas
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 overflow-hidden backdrop-blur-sm cursor-pointer h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedService(service.id)}
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Brillo animado */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(75,0,255,0.05) 0%, transparent 70%)',
                    }}
                  />

                  <div className="relative">
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
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Ver más button */}
                    <motion.button
                      className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors group/btn"
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-semibold">Ver detalles</span>
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Modal detallado */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Wrapper - Centrado con Flexbox */}
            <div className="fixed inset-0 flex items-center justify-center p-4 z-[101]">
              <motion.div
                className="w-full max-w-4xl max-h-[90vh] bg-white border border-gray-300 rounded-3xl overflow-auto shadow-2xl scrollbar-custom"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors z-10 text-gray-900"
                >
                  <X size={24} />
                </button>

                {/* Scrollable content */}
                <div className="p-6 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    {/* Icon y Título */}
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mb-8">
                      <div className={`p-6 rounded-2xl bg-gradient-to-br ${selected.color} flex-shrink-0`}>
                        <selected.icon size={48} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">{selected.title}</h2>
                        <p className="text-base md:text-xl text-gray-600">{selected.shortDesc}</p>
                      </div>
                    </div>

                    {/* Descripción completa */}
                    <div className="mb-12">
                      <h3 className="text-xl md:text-2xl font-bold mb-4">Descripción</h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {selected.fullDesc}
                      </p>
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-12">
                      <h3 className="text-xl md:text-2xl font-bold mb-6">Tecnologías Utilizadas</h3>
                      <div className="flex flex-wrap gap-3">
                        {selected.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-6 py-3 rounded-full bg-gray-100 border border-gray-300 text-gray-900 font-medium hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Casos de uso */}
                    <div className="mb-12">
                      <h3 className="text-xl md:text-2xl font-bold mb-6">Casos de Uso</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selected.useCases.map((useCase, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 border border-gray-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                            <span className="text-gray-600">{useCase}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Beneficios */}
                    <div className="mb-12">
                      <h3 className="text-xl md:text-2xl font-bold mb-6">Beneficios</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selected.benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Zap className="text-primary flex-shrink-0 mt-1" size={20} />
                            <span className="text-gray-900 font-medium">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                      href="/contacto"
                      className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Solicitar este servicio</span>
                      <ArrowRight size={24} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
