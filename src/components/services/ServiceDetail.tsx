import { motion } from 'framer-motion';
import { Globe, Database, Smartphone, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Desarrollo Web',
    shortDesc: 'Sitios web modernos, rápidos y responsivos que convierten visitantes en clientes.',
    color: 'from-blue-500 to-cyan-500',
    href: '/servicios/paginas-web-guatemala'
  },
  {
    id: 'software',
    icon: Database,
    title: 'Sistemas a la Medida',
    shortDesc: 'Software personalizado, CRM y sistemas de inventario diseñados para tu empresa.',
    color: 'from-purple-500 to-pink-500',
    href: '/servicios/desarrollo-software-medida'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    shortDesc: 'Apps nativas y multiplataforma para iOS y Android con una sola inversión.',
    color: 'from-orange-500 to-red-500',
    href: '/servicios/desarrollo-apps-moviles'
  }
];

export default function ServiceDetail() {
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

        {/* Services Grid (Now centered with justify-center and narrower grid-cols) */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 justify-center mb-12 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <a href={service.href} className="block h-full">
                  <motion.div
                    className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 overflow-hidden backdrop-blur-sm cursor-pointer h-full border-t-4" // Removed selectedService logic
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
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
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-900"> {/* Ensured text dark */}
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors">
                        {service.shortDesc}
                      </p>

                      {/* Ver más button */}
                      <motion.div
                        className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors group/btn font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        <span>Ver detalles</span>
                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </motion.div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
