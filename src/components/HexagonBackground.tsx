import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Hexagon {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
  opacity: number;
  rotationSpeed: number;
}

interface HexagonBackgroundProps {
  count?: number;
  className?: string;
  variant?: 'default' | 'large' | 'mixed';
}

export default function HexagonBackground({ count = 15, className = '', variant = 'default' }: HexagonBackgroundProps) {
  const [hexagons, setHexagons] = useState<Hexagon[]>([]);

  useEffect(() => {
    const generateHexagons = () => {
      const newHexagons: Hexagon[] = [];
      for (let i = 0; i < count; i++) {
        const sizeFactor = variant === 'large' ? 2.5 : variant === 'mixed' ? (i % 3 === 0 ? 3 : 1.8) : 1.5;
        newHexagons.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: (Math.random() * 80 + 60) * sizeFactor, // Mucho más grandes
          rotation: Math.random() * 360,
          delay: Math.random() * 3,
          duration: Math.random() * 12 + 20, // 20-32s movimiento
          opacity: Math.random() * 0.08 + 0.04, // Más sutiles para tema claro: 0.04-0.12
          rotationSpeed: Math.random() * 20 + 25, // 25-45s rotación
        });
      }
      setHexagons(newHexagons);
    };

    generateHexagons();
  }, [count, variant]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className="absolute"
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            width: hex.size,
            height: hex.size,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: hex.rotation
          }}
          animate={{
            opacity: [0, hex.opacity, hex.opacity, hex.opacity * 0.7, 0],
            scale: [0, 1, 1, 0.95, 0],
            rotate: [hex.rotation, hex.rotation + 360],
            y: [0, -80, -40, -100, 0],
            x: [0, 30, -20, 40, 0],
          }}
          transition={{
            opacity: {
              duration: hex.duration,
              delay: hex.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scale: {
              duration: hex.duration,
              delay: hex.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: hex.rotationSpeed,
              delay: hex.delay,
              repeat: Infinity,
              ease: 'linear',
            },
            y: {
              duration: hex.duration,
              delay: hex.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              duration: hex.duration,
              delay: hex.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(75, 0, 255, 0.2)) drop-shadow(0 0 25px rgba(0, 207, 254, 0.15))',
            }}
          >
            <defs>
              <linearGradient id={`hexGrad${hex.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4b00ff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#7000ff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id={`hexFill${hex.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4b00ff" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#7000ff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill={`url(#hexFill${hex.id})`}
              stroke={`url(#hexGrad${hex.id})`}
              strokeWidth="2.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
