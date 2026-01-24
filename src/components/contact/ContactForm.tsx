import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, XCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { AnimatedSection } from '../../utils/animations';

interface FormData {
    from_name: string;
    from_email: string;
    phone: string;
    company: string;
    service: string;

    message: string;
    city_check: string; // Honeypot field
}

interface FormErrors {
    from_name?: string;
    from_email?: string;
    phone?: string;
    message?: string;
}

const services = [
    'Desarrollo de Software',
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'Sistemas Empresariales',
    'Soluciones Cloud',
    'Consultoría Tecnológica'
];

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        from_name: '',
        from_email: '',
        phone: '',
        company: '',
        service: services[0],

        message: '',
        city_check: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [touched, setTouched] = useState<Set<string>>(new Set());

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'from_name':
                if (!value.trim()) return 'El nombre es requerido';
                if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
                return undefined;

            case 'from_email':
                if (!value.trim()) return 'El email es requerido';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Email inválido';
                return undefined;

            case 'phone':
                if (!value.trim()) return 'El teléfono es requerido';
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(value)) return 'Teléfono inválido';
                if (value.replace(/\D/g, '').length < 8) return 'Teléfono debe tener al menos 8 dígitos';
                return undefined;

            case 'message':
                if (!value.trim()) return 'El mensaje es requerido';
                if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
                return undefined;

            default:
                return undefined;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched.has(name)) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched(prev => new Set(prev).add(name));
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        ['from_name', 'from_email', 'phone', 'message'].forEach(field => {
            const error = validateField(field, formData[field as keyof FormData]);
            if (error) {
                newErrors[field as keyof FormErrors] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setTouched(new Set(['from_name', 'from_email', 'phone', 'message']));
            return;
        }

        setStatus('loading');

        try {
            // Honeypot check
            if (formData.city_check) {
                // If honeypot is filled, simulate success but don't send
                console.log('Bot detected. Submission blocked.');
                setStatus('success');
                setFormData({
                    from_name: '',
                    from_email: '',
                    phone: '',
                    company: '',
                    service: services[0],
                    message: '',
                    city_check: ''
                });
                setTouched(new Set());
                setErrors({});
                setTimeout(() => setStatus('idle'), 5000);
                return;
            }

            // EmailJS configuration
            await emailjs.send(
                'service_vynext', // User needs to create this in EmailJS
                'template_n9f0j78', // User needs to create this in EmailJS
                formData,
                '4z8qS_anG3ie06LQi' // Public key provided by user
            );

            setStatus('success');
            setFormData({
                from_name: '',
                from_email: '',
                phone: '',
                company: '',
                service: services[0],
                message: '',
                city_check: ''
            });
            setTouched(new Set());
            setErrors({});

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="formulario" className="py-20 relative overflow-hidden">
            {/* Fondo claro con gradiente sutil */}
            <div className="absolute inset-0 bg-gray-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-blue-50/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,0,255,0.05),transparent_60%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection variant="fadeInUp" className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Envíanos un Mensaje</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                    </p>
                </AnimatedSection>

                <div className="max-w-3xl mx-auto">
                    <AnimatedSection variant="fadeInUp" delay={0.2}>
                        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md border border-gray-300 p-8 rounded-3xl shadow-2xl">
                            {/* Honeypot field - Invisible to users */}
                            <div className="absolute opacity-0 -z-10 w-0 h-0 overflow-hidden">
                                <label htmlFor="city_check">City</label>
                                <input
                                    type="text"
                                    id="city_check"
                                    name="city_check"
                                    value={formData.city_check}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre Completo <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.from_name && touched.has('from_name') ? 'border-red-500' : 'border-gray-300'
                                            } rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="Juan Pérez"
                                    />
                                    {errors.from_name && touched.has('from_name') && (
                                        <p className="text-red-500 text-xs mt-1">{errors.from_name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="from_email"
                                        name="from_email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.from_email && touched.has('from_email') ? 'border-red-500' : 'border-gray-300'
                                            } rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="juan@ejemplo.com"
                                    />
                                    {errors.from_email && touched.has('from_email') && (
                                        <p className="text-red-500 text-xs mt-1">{errors.from_email}</p>
                                    )}
                                </div>

                                {/* Teléfono */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.phone && touched.has('phone') ? 'border-red-500' : 'border-gray-300'
                                            } rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="+502 1234-5678"
                                    />
                                    {errors.phone && touched.has('phone') && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Empresa */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Empresa (Opcional)
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Mi Empresa S.A."
                                    />
                                </div>
                            </div>

                            {/* Servicio de interés */}
                            <div className="mb-6">
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                    Servicio de Interés
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-primary transition-colors"
                                >
                                    {services.map(service => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Mensaje */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows={5}
                                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.message && touched.has('message') ? 'border-red-500' : 'border-gray-300'
                                        } rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none`}
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                />
                                {errors.message && touched.has('message') && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                                className="w-full bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-bold text-lg text-white hover:shadow-[0_0_30px_rgba(75,0,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Enviar Mensaje
                                    </>
                                )}
                            </motion.button>

                            {/* Success/Error Messages */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-2 text-green-400"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        <span>¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</span>
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-2 text-red-400"
                                    >
                                        <XCircle className="w-5 h-5" />
                                        <span>Hubo un error al enviar el mensaje. Por favor intenta nuevamente.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
