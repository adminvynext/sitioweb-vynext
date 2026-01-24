import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import HeroHexagon from '../HeroHexagon';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Desarrollo de Software y Web en Guatemala';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo claro degradado con acentos sutiles */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(75,0,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,207,254,0.06),transparent_50%)]" />

      {/* Hexagon Background - Grandes y giratorios */}
      {/* Hexagon Background removed */}

      {/* Hexagon Decoration */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <HeroHexagon />
      </div>

      {/* Gradient Overlay muy sutil para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 backdrop-blur-sm border border-gray-300 mb-8"
          >
            <Sparkles size={16} className="text-[var(--color-secondary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Agencia de Transformación Digital en Guatemala
            </span>
          </motion.div>

          {/* Main Title with Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight min-h-[1.2em]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-700">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-[var(--color-secondary)] ml-2 align-middle"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto"
          >
            Somos una empresa de desarrollo web en Guatemala. Creamos sistemas a la medida que impulsan tu éxito.
            <br />
            <span className="text-[var(--color-secondary)]">Software • Apps Móviles • Automatización</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="/contacto"
              className="group relative px-8 py-4 rounded-xl gradient-primary text-white font-semibold text-lg shadow-lg shadow-primary/30 overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(75, 0, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Comenzar Proyecto</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/servicios"
              className="px-8 py-4 rounded-xl border-2 border-gray-300 text-[var(--color-text-primary)] font-semibold text-lg backdrop-blur-sm hover:bg-gray-100 hover:border-[var(--color-secondary)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Servicios
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Dedicación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Soporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Innovación</div>
            </div>
          </motion.div>
        </div>
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
