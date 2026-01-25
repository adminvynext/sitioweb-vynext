import React from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../utils/animations';
import { Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const contactInfo = [

    {
        icon: Phone,
        title: 'Teléfono',
        content: '+502 3005 0209',
        subContent: 'Lun - Vie: 9:00 AM - 6:00 PM'
    },
    {
        icon: Mail,
        title: 'Email',
        content: 'admin@vynext.lat',
        subContent: 'Respuesta en 24 horas'
    },
    {
        icon: Clock,
        title: 'Horario',
        content: 'Lunes - Viernes',
        subContent: '9:00 AM - 6:00 PM GMT-6'
    }
];

const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/vynext?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', color: 'text-pink-600 hover:text-pink-700' },
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585311974115', color: 'text-blue-600 hover:text-blue-700' }
];

export const ContactInfo = () => {
    return (
        <section id="info" className="py-20 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection variant="fadeInUp" className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Información de Contacto</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Estamos aquí para responder tus preguntas y ayudarte con tu proyecto.
                    </p>
                </AnimatedSection>

                {/* Contact Info Cards */}
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {contactInfo.map((item, index) => (
                        <StaggerItem key={index}>
                            <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 h-full shadow-lg">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-md">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 font-medium mb-1">{item.content}</p>
                                <p className="text-gray-500 text-sm">{item.subContent}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Social Links */}
                <AnimatedSection variant="fadeInUp" delay={0.4}>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-6">Síguenos en Redes Sociales</h3>
                        <div className="flex justify-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 ${social.color} transition-all hover:scale-110 hover:border-primary/30 shadow-sm`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ContactInfo;
