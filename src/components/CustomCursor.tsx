import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar si es dispositivo táctil
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Crear rastro hexagonal más frecuente - cada 3-4 movimientos
      if (Math.random() > 0.3) { // 70% de probabilidad (más hexágonos)
        const newTrail: Trail = {
          id: trailId++,
          x: e.clientX,
          y: e.clientY,
          rotation: Math.random() * 360,
        };

        setTrails((prev) => [...prev, newTrail]);

        // Eliminar el rastro después de la animación
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 800);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice]);

  // No renderizar en dispositivos táctiles
  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Solo rastros hexagonales, cursor por defecto visible */}
      
      {/* Rastros hexagonales más grandes y visibles */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className="absolute w-8 h-8"
            style={{
              left: trail.x - 16,
              top: trail.y - 16,
            }}
            initial={{ 
              opacity: 0.9, 
              scale: 0.5,
              rotate: trail.rotation 
            }}
            animate={{ 
              opacity: 0, 
              scale: 1.5,
              rotate: trail.rotation + 180
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: 'easeOut'
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id={`trailGrad${trail.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4b00ff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#7000ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00d1ff" stopOpacity="1" />
                </linearGradient>
                <filter id={`trailGlow${trail.id}`}>
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <polygon
                points="50,10 85,30 85,70 50,90 15,70 15,30"
                fill={`url(#trailGrad${trail.id})`}
                fillOpacity="0.4"
                stroke={`url(#trailGrad${trail.id})`}
                strokeWidth="3"
                filter={`url(#trailGlow${trail.id})`}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}