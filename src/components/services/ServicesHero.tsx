import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import HeroHexagon from '../HeroHexagon';

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo claro degradado con acentos sutiles */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,0,255,0.06),transparent_50%)]" />

      {/* Hexágonos grandes */}
      {/* Hexágonos grandes removed */}

      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <HeroHexagon />
      </div>

      {/* Overlay muy sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Sparkles size={16} />
            <span>Servicios Profesionales</span>
          </motion.div>

          {/* Título */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Soluciones Tecnológicas{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-700">a Tu Medida</span>
          </h1>

          {/* Descripción */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Desde desarrollo de software personalizado hasta sistemas empresariales completos.
            Transformamos tus ideas en soluciones digitales innovadoras y escalables.
          </p>

          {/* Stats rápidos */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600 text-sm">Servicios</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-600 text-sm">Tecnologías</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600 text-sm">Personalizado</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-[var(--color-secondary)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
