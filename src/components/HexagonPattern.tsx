import { motion } from 'framer-motion';

interface HexagonPatternProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  animate?: boolean;
}

export default function HexagonPattern({ 
  className = '', 
  density = 'medium',
  position = 'top-right',
  animate = true
}: HexagonPatternProps) {
  
  const hexCount = {
    low: 3,
    medium: 5,
    high: 8,
  };

  const count = hexCount[density];

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const hexagons = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 80 + i * 40,
    delay: i * 0.2,
    opacity: 0.08 - i * 0.01,
  }));

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none overflow-hidden ${className}`}>
      <div className="relative w-[400px] h-[400px]">
        {hexagons.map((hex) => (
          <motion.div
            key={hex.id}
            className="absolute top-1/2 left-1/2"
            style={{
              width: hex.size,
              height: hex.size,
              marginLeft: -hex.size / 2,
              marginTop: -hex.size / 2,
            }}
            initial={animate ? { 
              opacity: 0, 
              scale: 0,
              rotate: -180 
            } : {
              opacity: hex.opacity,
              scale: 1,
              rotate: 0
            }}
            animate={animate ? { 
              opacity: hex.opacity, 
              scale: 1,
              rotate: 0
            } : {}}
            transition={animate ? {
              duration: 1,
              delay: hex.delay,
              ease: [0.6, 0.05, 0.01, 0.9]
            } : {}}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id={`patternGrad${hex.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4b00ff" stopOpacity={hex.opacity * 2} />
                  <stop offset="100%" stopColor="#00d1ff" stopOpacity={hex.opacity * 2} />
                </linearGradient>
              </defs>
              <polygon
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                fill="none"
                stroke={`url(#patternGrad${hex.id})`}
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
