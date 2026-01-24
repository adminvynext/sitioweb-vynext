import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';
import HexagonPattern from '../HexagonPattern';

export default function PlansCTA() {
  return (
    <section className="py-24 bg-darker/95 relative overflow-hidden">
      <HexagonPattern />

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {/* CTA Principal */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-12 rounded-3xl text-center mb-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
                  Tu Sitio Web Profesional te Espera
                </h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Paga una mensualidad accesible y olvídate de todo lo demás.
                  Nosotros nos encargamos del desarrollo, hosting y actualizaciones continuas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contacto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consulta Gratuita
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="/contacto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    Ver Ejemplos
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AnimatedSection delay={0.1}>
                <div className="text-center p-6 bg-darker/50 backdrop-blur-sm border border-primary/10 rounded-xl">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">Todo</div>
                  <div className="text-sm text-gray-400">Incluido</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="text-center p-6 bg-darker/50 backdrop-blur-sm border border-primary/10 rounded-xl">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">12m</div>
                  <div className="text-sm text-gray-400">Contrato Mínimo</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="text-center p-6 bg-darker/50 backdrop-blur-sm border border-primary/10 rounded-xl">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">Q.199</div>
                  <div className="text-sm text-gray-400">Desde</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="text-center p-6 bg-darker/50 backdrop-blur-sm border border-primary/10 rounded-xl">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-gray-400">Guatemalteco</div>
                </div>
              </AnimatedSection>
            </div>

            {/* Nota Final */}
            <AnimatedSection delay={0.5} className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                💼 <strong>Empresas:</strong> Si necesitas software a la medida (ERP, CRM, sistemas personalizados),
                <a href="/servicios" className="text-primary hover:underline ml-1">consulta nuestros servicios especializados</a>
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
