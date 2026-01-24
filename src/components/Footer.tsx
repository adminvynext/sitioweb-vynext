import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  servicios: [
    { name: 'Desarrollo de Software', href: '/servicios#software' },
    { name: 'Desarrollo Web', href: '/servicios#web' },
    { name: 'Sistemas Empresariales', href: '/servicios#sistemas' },
  ],
  empresa: [
    { name: 'Nosotros', href: '/nosotros' },
  ],
  soporte: [
    { name: 'Contacto', href: '/contacto' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/vynext?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585311974115', label: 'Facebook' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1a0a3e] border-t border-primary/30">
      {/* Fondo oscuro con gradiente purple */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1a4e] via-[#1a0a3e] to-[#0a0520]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/Logo-negativo.png"
                alt="Vynext Logo"
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Desarrollamos soluciones de software innovadoras que impulsan el crecimiento de tu negocio.
              Transformamos ideas en realidad digital.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:admin@vynext.lat"
                className="flex items-center space-x-2 text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
              >
                <Mail size={18} />
                <span>admin@vynext.lat</span>
              </a>
              <a
                href="tel:+50230050209"
                className="flex items-center space-x-2 text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
              >
                <Phone size={18} />
                <span>+502 3005 0209</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={18} />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-bold text-white mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">
              Soporte
            </h3>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © {currentYear} Vynext. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-2 rounded-lg bg-white/10 text-gray-300 hover:text-[var(--color-secondary)] hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>


        </div>
      </div>
    </footer>
  );
}
