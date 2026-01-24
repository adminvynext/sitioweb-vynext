import { motion } from 'framer-motion';
import { useState } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: '🌐',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y responsivos que impulsan tu presencia digital.',
    color: 'from-blue-50 to-purple-50'
  },
  {
    icon: '💻',
    title: 'Desarrollo de Software',
    description: 'Soluciones de software personalizadas para optimizar tus procesos de negocio.',
    color: 'from-purple-50 to-pink-50'
  },
  {
    icon: '📱',
    title: 'Apps Móviles',
    description: 'Aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    color: 'from-pink-50 to-yellow-50'
  },
  {
    icon: '🎨',
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
    color: 'from-yellow-50 to-orange-50'
  },
  {
    icon: '☁️',
    title: 'Soluciones Cloud',
    description: 'Infraestructura escalable y segura en la nube para tu negocio.',
    color: 'from-green-50 to-teal-50'
  },
  {
    icon: '🔒',
    title: 'Seguridad',
    description: 'Protección avanzada y auditorías de seguridad para tus aplicaciones.',
    color: 'from-red-50 to-pink-50'
  }
];

export default function AnimatedServices({ client = 'load' }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className={`p-6 rounded-xl bg-linear-to-br ${service.color} hover:shadow-xl transition-shadow cursor-pointer relative overflow-hidden`}
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="text-4xl mb-4"
            animate={{ 
              rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0 
            }}
            transition={{ duration: 0.5 }}
          >
            {service.icon}
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 relative z-10">{service.title}</h3>
          <p className="text-gray-600 relative z-10">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
