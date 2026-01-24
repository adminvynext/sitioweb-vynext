import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';

const processSteps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Entendemos tus necesidades, objetivos y desafíos. Analizamos tu negocio para proponer la mejor solución.',
    duration: '1-2 semanas',
    deliverables: ['Documento de requisitos', 'Propuesta técnica', 'Cotización detallada']
  },
  {
    number: '02',
    title: 'Planificación',
    description: 'Diseñamos la arquitectura, definimos el stack tecnológico y creamos un roadmap detallado del proyecto.',
    duration: '1 semana',
    deliverables: ['Arquitectura del sistema', 'Mockups y prototipos', 'Plan de proyecto']
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Desarrollamos tu solución de forma iterativa con entregas semanales y comunicación constante.',
    duration: '4-12 semanas',
    deliverables: ['Código fuente', 'Entregas semanales', 'Testing continuo']
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Realizamos pruebas exhaustivas: unitarias, integración, rendimiento y seguridad.',
    duration: '1-2 semanas',
    deliverables: ['Reporte de testing', 'Bugs corregidos', 'Optimizaciones']
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Desplegamos tu solución en producción con configuración de servidores, dominios y SSL.',
    duration: '3-5 días',
    deliverables: ['Sistema en producción', 'Documentación', 'Capacitación']
  },
  {
    number: '06',
    title: 'Soporte',
    description: 'Mantenimiento continuo, actualizaciones y soporte técnico para garantizar el éxito de tu proyecto.',
    duration: 'Continuo',
    deliverables: ['Soporte 24/7', 'Actualizaciones', 'Monitoreo']
  }
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo claro con acentos sutiles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-20">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4"
          >
            Nuestro Proceso
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Cómo <span className="gradient-text">Trabajamos</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso probado y transparente que garantiza el éxito de tu proyecto
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical central (desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          {/* Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <motion.div
                        className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm"
                        whileHover={{ scale: 1.02, y: -5 }}
                        style={{
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-6xl font-bold gradient-text opacity-50">{step.number}</span>
                          <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                            {step.duration}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                            Entregables:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 border border-secondary/30 text-secondary text-sm"
                              >
                                <CheckCircle size={14} />
                                <span>{deliverable}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Circle indicator (center) */}
                    <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center shadow-lg shadow-primary/50 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                      >
                        <CheckCircle size={32} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Bottom */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-8">
            ¿Listo para comenzar tu proyecto?
          </p>
          <motion.a
            href="/contacto"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Hablemos de tu proyecto</span>
            <Circle size={24} className="fill-current" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
