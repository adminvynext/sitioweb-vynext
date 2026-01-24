import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Building2, ShoppingCart } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';

interface Plan {
  id: string;
  name: string;
  icon: any;
  tagline: string;
  price: {
    monthly: number;
    annual: number;
  };
  popular?: boolean;
  features: string[];
  limitations?: string[];
  cta: string;
  color: string;
}

const plans: Plan[] = [
  {
    id: 'emprendedor',
    name: 'Emprendedor',
    icon: Zap,
    tagline: 'Landing Page',
    price: {
      monthly: 199,
      annual: 199 * 12
    },
    features: [
      'Sitio de 1 Página (Scroll)',
      'Dominio .com incluido',
      'Hosting Alta Velocidad',
      'Formulario Contacto/WhatsApp',
      '1 Correo Corporativo',
      'Mantenimiento técnico',
      '1 cambio de texto/imagen por semana',
      'SSL Certificado',
      'Responsive (móvil/tablet)',
    ],

    cta: 'Comenzar Ahora',
    color: '#4b00ff'
  },
  {
    id: 'negocio',
    name: 'Negocio',
    icon: Star,
    tagline: 'Sitio Corporativo',
    price: {
      monthly: 450,
      annual: 450 * 12
    },
    popular: true,
    features: [
      'Sitio Web Completo',
      'Hasta 5 secciones (Inicio, Nosotros, Servicios, Contacto, etc.)',
      'Dominio .com incluido',
      '3 Correos Corporativos',
      'Enlaces a Redes Sociales',
      'Mantenimiento técnico',
      'Hasta 2 cambios de contenido por semana',
      'Hosting Alta Velocidad',
      'SSL Certificado',
      'Responsive (móvil/tablet)',
      'Soporte estándar',
    ],

    cta: 'Elegir Negocio',
    color: '#00d1ff'
  },
  {
    id: 'catalogo',
    name: 'Catálogo',
    icon: Building2,
    tagline: 'Catálogo/Blog',
    price: {
      monthly: 650,
      annual: 650 * 12
    },
    features: [
      'Sitio con Catálogo de Productos',
      'Panel para subir productos o blog',
      'Dominio y Hosting Premium',
      '5 Correos Corporativos',
      'Mantenimiento técnico',
      'Prioridad en atención',
      '2 cambios semanales + Asesoría técnica',
      'Enlaces a Redes Sociales',
      'SSL Certificado',
      'Responsive (móvil/tablet)',
      'Soporte premium',
      'Backup automático',
    ],

    cta: 'Elegir Catálogo',
    color: '#10b981'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: ShoppingCart,
    tagline: 'Tienda en Línea',
    price: {
      monthly: 850,
      annual: 850 * 12
    },
    popular: true,
    features: [
      'Tienda en Línea Completa',
      'Sistema de Gestión de Inventario',
      'Carrito de Compras',
      'Panel de Administración',
      'Gestión de Pedidos y Clientes',
      'Cupones y Descuentos',
      'Dominio y Hosting Premium',
      '5 Correos Corporativos',
      'Mantenimiento técnico prioritario',
      '3 cambios semanales + Asesoría técnica',
      'SSL Certificado',
      'Responsive (móvil/tablet)',
      'Soporte premium 24/7',
      'Backup automático diario',
      'Reportes de ventas',
    ],
    cta: 'Iniciar E-commerce',
    color: '#f59e0b'
  }
];

export default function PricingCards() {
  const formatPrice = (plan: Plan) => {
    return `Q. ${plan.price.monthly.toLocaleString()}`;
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo claro con degradado sutil */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary font-semibold">Modelo Todo Incluido</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Elige tu <span className="text-gradient">Plan Ideal</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Cada plan incluye desarrollo profesional, hosting premium, dominio .com y mantenimiento continuo.<br />
            <span className="text-primary">Paga una mensualidad fija y olvídate de todo lo demás.</span>
          </p>
        </AnimatedSection>

        {/* Cards de Planes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <AnimatedSection
                key={plan.id}
                delay={index * 0.15}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full flex flex-col p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color === '#4b00ff' ? 'from-purple-500 to-pink-500' : plan.color === '#00d1ff' ? 'from-blue-500 to-cyan-500' : plan.color === '#10b981' ? 'from-green-500 to-emerald-500' : 'from-orange-500 to-red-500'} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Brillo animado */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(75,0,255,0.05) 0%, transparent 70%)',
                    }}
                  />

                  {/* Header del Card */}
                  <div className="relative pt-0 pb-6">{/* Icono */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`relative inline-flex p-4 rounded-xl mb-6 shadow-lg shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-shadow duration-500`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        style={{
                          background: `linear-gradient(135deg, ${plan.color}, ${plan.color}80)`,
                        }}
                      >
                        <Icon className="w-8 h-8 text-white relative z-10" />
                        <div className="absolute inset-0 rounded-xl bg-white/20 blur-sm" />
                      </motion.div>
                    </div>

                    {/* Nombre y tagline */}
                    <div className="relative mb-8">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600 text-base">{plan.tagline}</p>
                    </div>

                    {/* Precio */}
                    <div className="relative">
                      <div className="flex items-end gap-2 mb-3">
                        <span className="text-4xl sm:text-5xl font-black text-gray-900">{formatPrice(plan)}</span>
                        <span className="text-xl text-gray-600 pb-2">/mes</span>
                      </div>
                      {plan.limitations && plan.limitations.length > 0 && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-lg">
                          <span className="text-secondary text-sm font-medium">
                            + {plan.limitations[0].replace('Inscripción única: ', '')} inscripción
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Separador */}
                  <div className="relative">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  </div>

                  {/* Características */}
                  <div className="flex-grow py-10 relative">
                    <div className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 group/feature"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover/feature:bg-primary/30 transition-colors">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl font-bold text-base transition-all relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 group/btn"
                    >
                      <span className="relative z-10">{plan.cta}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Nota */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <p className="text-gray-500 text-sm mb-2">
            * Todos los precios están en Quetzales (GTQ). Impuestos incluidos.
          </p>
          <p className="text-gray-400 text-xs">
            Si el cliente no entrega material (diseño, logos/textos), se cobra un extra de Q. 600.00 por asistencia de contenido
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
