import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    // WhatsApp number
    const whatsappNumber = '50250509724'; // Format: country code + number (no + or spaces)
    const message = encodeURIComponent('¡Hola! Me gustaría obtener más información sobre sus servicios.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <>
            {/* Floating Button */}
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 group"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Button Circle */}
                <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-shadow">
                        <MessageCircle className="w-7 h-7 text-white" />
                    </div>

                    {/* Pulse Animation */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-green-500/30"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
                        >
                            <div className="bg-gray-900 border border-white/10 px-4 py-2 rounded-lg shadow-xl">
                                <p className="text-white text-sm font-medium">¿Necesitas ayuda?</p>
                                <p className="text-gray-400 text-xs">Chatea con nosotros</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.a>
        </>
    );
};

export default WhatsAppButton;
