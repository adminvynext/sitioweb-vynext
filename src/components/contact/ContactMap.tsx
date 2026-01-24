import React from 'react';
import { AnimatedSection } from '../../utils/animations';

export const ContactMap = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Blur Background */}
            <div className="absolute inset-0 bg-gray-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-50/50 via-white to-cyan-50/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(75,0,255,0.05),transparent_60%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection variant="fadeInUp" className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Nuestra Ubicación</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Visítanos en nuestra oficina o agenda una reunión virtual.
                    </p>
                </AnimatedSection>

                <AnimatedSection variant="fadeInUp" delay={0.2}>
                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl" style={{ height: '450px' }}>
                            {/* Google Maps Embed - Guatemala City as placeholder */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123522.67493576916!2d-90.58771984375!3d14.628434400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3c7f5f3e6e5%3A0x3a9d0e3f9c6e6e6e!2sGuatemala%20City%2C%20Guatemala!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de ubicación de Vynext"
                            />
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ContactMap;
