import { Check, X, Zap, Star, Building2, ShoppingCart, Globe, Mail, Edit3, Headphones, Shield, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../../utils/animations';
import { motion } from 'framer-motion';

interface Feature {
  name: string;
  emprendedor: boolean | string;
  negocio: boolean | string;
  catalogo: boolean | string;
  ecommerce: boolean | string;
  icon?: any;
  category?: string;
}

const featureCategories = [
  {
    name: 'Características del Sitio',
    icon: Globe,
    features: [
      {
        name: 'Tipo de sitio',
        emprendedor: 'Landing Page',
        negocio: 'Sitio Web Completo',
        catalogo: 'Catálogo de Productos',
        ecommerce: 'Tienda en Línea'
      },
      {
        name: 'Número de secciones',
        emprendedor: '1 página',
        negocio: 'Hasta 5 secciones',
        catalogo: 'Ilimitadas',
        ecommerce: 'Ilimitadas'
      },
      {
        name: 'Diseño responsive',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
      {
        name: 'Formulario de contacto',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
    ]
  },
  {
    name: 'Hosting & Seguridad',
    icon: Shield,
    features: [
      {
        name: 'Hosting incluido',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
      {
        name: 'Certificado SSL',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
      {
        name: 'Dominio (.com)',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
      {
        name: 'Backup automático',
        emprendedor: false,
        negocio: false,
        catalogo: true,
        ecommerce: 'Diario'
      },
    ]
  },
  {
    name: 'Correos & Comunicación',
    icon: Mail,
    features: [
      {
        name: 'Correos corporativos',
        emprendedor: '1 cuenta',
        negocio: '3 cuentas',
        catalogo: '5 cuentas',
        ecommerce: '5 cuentas'
      },
      {
        name: 'Integración redes sociales',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
    ]
  },
  {
    name: 'Mantenimiento & Cambios',
    icon: Edit3,
    features: [
      {
        name: 'Cambios de contenido semanales',
        emprendedor: '1 cambio/semana',
        negocio: '2 cambios/semana',
        catalogo: '2 cambios/semana',
        ecommerce: '3 cambios/semana'
      },
      {
        name: 'Panel de administración',
        emprendedor: false,
        negocio: false,
        catalogo: true,
        ecommerce: 'Completo'
      },
      {
        name: 'Gestión de productos',
        emprendedor: false,
        negocio: false,
        catalogo: 'Completa',
        ecommerce: 'Completa'
      },
      {
        name: 'Carrito de compras',
        emprendedor: false,
        negocio: false,
        catalogo: false,
        ecommerce: true
      },

      {
        name: 'Gestión de inventario',
        emprendedor: false,
        negocio: false,
        catalogo: false,
        ecommerce: true
      },
    ]
  },
  {
    name: 'Soporte & Optimización',
    icon: Headphones,
    features: [
      {
        name: 'Soporte',
        emprendedor: 'Email',
        negocio: 'WhatsApp + Email',
        catalogo: 'Premium',
        ecommerce: 'Premium 24/7'
      },
      {
        name: 'SEO Básico',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
      {
        name: 'Google Analytics',
        emprendedor: true,
        negocio: true,
        catalogo: true,
        ecommerce: true
      },
      {
        name: 'Reportes de ventas',
        emprendedor: false,
        negocio: false,
        catalogo: false,
        ecommerce: true
      },
    ]
  },

];

export default function ComparisonTable() {
  const plans = [
    { id: 'emprendedor', name: 'Emprendedor', price: 'Q. 199', icon: Zap, color: '#4b00ff' },
    { id: 'negocio', name: 'Negocio', price: 'Q. 450', icon: Star, color: '#00d1ff' },
    { id: 'catalogo', name: 'Catálogo', price: 'Q. 650', icon: Building2, color: '#10b981' },
    { id: 'ecommerce', name: 'E-commerce', price: 'Q. 850', icon: ShoppingCart, color: '#f59e0b' },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gray-800/50 flex items-center justify-center">
            <X className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      );
    }
    return <span className="text-sm text-gray-600 font-medium">{value}</span>;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
            <span className="text-secondary font-semibold">Comparación Detallada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Compara <span className="text-gradient">Características</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Revisa en detalle qué incluye cada plan y elige el que mejor se adapte a tu negocio
          </p>
        </AnimatedSection>

        {/* Selector de planes móvil */}
        <div className="lg:hidden mb-12">
          <div className="grid grid-cols-2 gap-3 p-2 bg-gray-100 rounded-2xl border border-gray-200">
            {plans.map((plan) => {
              const PlanIcon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className="p-4 rounded-xl text-center bg-white border border-gray-200"
                >
                  <PlanIcon className="w-6 h-6 mx-auto mb-2" style={{ color: plan.color }} />
                  <div className="text-sm font-bold mb-1">{plan.name}</div>
                  <div className="text-xs text-gray-600">{plan.price}/mes</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categorías con features */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {featureCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;

            return (
              <AnimatedSection key={catIndex} delay={catIndex * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white backdrop-blur-xl rounded-3xl border border-gray-200 overflow-hidden"
                >
                  {/* Header de categoría */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-5 border-b border-primary/10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/20 rounded-xl">
                        <CategoryIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="p-8 lg:p-10">
                    {/* Desktop: Grid horizontal */}
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-5 gap-6 mb-10">
                        <div className="pr-4"></div>
                        {plans.map((plan) => {
                          const PlanIcon = plan.icon;
                          return (
                            <div
                              key={plan.id}
                              className="text-center p-5 rounded-xl bg-gray-50"
                            >
                              <PlanIcon className="w-8 h-8 mx-auto mb-3" style={{ color: plan.color }} />
                              <div className="font-bold text-lg mb-1">{plan.name}</div>
                              <div className="text-sm text-gray-600">{plan.price}/mes</div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="grid grid-cols-5 gap-6 items-center py-5 px-6 rounded-xl hover:bg-primary/5 transition-colors"
                          >
                            <div className="text-gray-700 font-medium pr-4">{feature.name}</div>
                            <div className="text-center">{renderValue(feature.emprendedor)}</div>
                            <div className="text-center">{renderValue(feature.negocio)}</div>
                            <div className="text-center">{renderValue(feature.catalogo)}</div>
                            <div className="text-center">{renderValue(feature.ecommerce)}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile: Vertical cards */}
                    <div className="lg:hidden space-y-6">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                          <div className="text-gray-900 font-semibold mb-4 pb-3 border-b border-gray-200">
                            {feature.name}
                          </div>
                          <div className="space-y-3">
                            {plans.map((plan) => {
                              const PlanIcon = plan.icon;
                              const value = feature[plan.id as keyof Omit<Feature, 'name' | 'icon' | 'category'>];
                              return (
                                <div key={plan.id} className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <PlanIcon className="w-5 h-5" style={{ color: plan.color }} />
                                    <span className="text-sm text-gray-600">{plan.name}</span>
                                  </div>
                                  <div>{renderValue(value)}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Final */}
        <AnimatedSection delay={0.6} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold cursor-pointer"
          >
            <span>¿Tienes dudas? Consulta gratis</span>
            <Check className="w-5 h-5" />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
