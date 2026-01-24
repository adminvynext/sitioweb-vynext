import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Qué incluye exactamente el pago mensual?',
    answer: 'El pago mensual incluye TODO: desarrollo web inicial, hosting, dominio .com, certificado SSL, correos corporativos, y lo más importante: cambios de contenido semanales según tu plan (1, 2 o 3 cambios). No pagas nada adicional por mantenimiento o actualizaciones de contenido dentro de lo pactado.'
  },
  {
    question: '¿Qué es la "inscripción única" y qué cubre?',
    answer: 'Es un pago inicial único que cubre: configuración del servidor, instalación de dominio y correos, diseño inicial del sitio, optimización SEO básica, y configuración de todas las herramientas (Google Analytics, Search Console, etc). Emprendedor Q.350, Negocio Q.500, Catálogo Q.800.'
  },
  {
    question: '¿Puedo cancelar antes de los 12 meses?',
    answer: 'El contrato mínimo es de 12 meses para todos los planes. Si cancelas antes, debes pagar una penalización equivalente a 3 meses de mensualidad. Después de 12 meses, puedes cancelar con 1 mes de anticipación sin penalización.'
  },
  {
    question: '¿Qué pasa si necesito más cambios de los incluidos?',
    answer: 'Cada plan incluye cambios semanales (Emprendedor: 1, Negocio: 2, Catálogo: 3). Si necesitas cambios adicionales, se cobran Q.150 por cambio extra. Los cambios son acumulables: si no usas los de una semana, puedes usarlos la siguiente.'
  },
  {
    question: '¿Qué se considera un "cambio de contenido"?',
    answer: 'Un cambio puede ser: actualizar textos, cambiar imágenes, modificar información de contacto, agregar/editar productos (Plan Catálogo), actualizar precios o promociones. Cambios mayores como nuevas secciones o funcionalidades se cotizan aparte.'
  },
  {
    question: '¿Qué pasa si no tengo diseño o contenido para mi sitio?',
    answer: 'Si el cliente no entrega material (diseño, logos, textos), cobramos Q.600 adicionales por servicio de asistencia de contenido. Este cargo único cubre la creación de contenido básico y diseño conceptual inicial para tu sitio.'
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer: 'Sí, puedes hacer upgrade a un plan superior en cualquier momento. Se cobra la diferencia prorrateada. Para hacer downgrade, debes esperar hasta completar tu período actual de 12 meses y dar aviso con 1 mes de anticipación.'
  },
  {
    question: '¿Qué pasa con mi sitio si dejo de pagar?',
    answer: 'Si incumples el pago, el sitio se suspende después de 15 días de mora. Tienes 30 días para regularizar. Después de 30 días, el sitio se elimina permanentemente. Al completar 12 meses, puedes optar por llevarte el código fuente (cobro de Q.2,500 por transferencia completa).'
  },
  {
    question: '¿Los planes incluyen e-commerce o sistema de pagos?',
    answer: 'El Plan Catálogo incluye gestión de productos y sistema de pedidos vía WhatsApp (catálogo visual). Si necesitas carrito de compras completo con pasarelas de pago (Visanet, BAC, etc.), eso requiere nuestro servicio de Software a la Medida que se cotiza por separado.'
  },
  {
    question: '¿Ofrecen soporte técnico y en qué horarios?',
    answer: 'Emprendedor: Soporte por email en horario laboral (9am-6pm). Negocio: WhatsApp + Email con respuesta en 24h. Catálogo: Soporte Premium 24/7 con respuesta en 4h para emergencias. Actualizaciones de seguridad y mantenimiento preventivo están incluidas en todos.'
  },
];

export default function PlansFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary font-semibold">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Resolvemos tus <span className="text-gradient">Dudas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Encuentra respuestas sobre contratos, cambios, inscripción y todo lo que necesitas saber
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                initial={false}
                className="bg-darker/80 backdrop-blur-xl border border-primary/15 rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-primary" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2 text-gray-300 leading-relaxed text-base border-t border-primary/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Contacto adicional */}
        <AnimatedSection delay={0.6} className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">¿No encontraste tu respuesta?</p>
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 rounded-xl text-white font-bold transition-all shadow-lg shadow-primary/30"
          >
            Contáctanos Directamente
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
