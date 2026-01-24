import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Velocidad del parallax: 0.5 = lento, 1 = normal, 2 = rápido
  direction?: 'up' | 'down';
}

export function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? ['0%', `-${speed * 100}%`] : [`-${speed * 100}%`, '0%']
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '',
  speed = 0.3
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  depth?: number; // Profundidad: 0-1, donde 1 es el más alejado
}

export function ParallaxLayer({ 
  children, 
  className = '',
  depth = 0.5
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * depth]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <motion.div 
      ref={ref}
      className={className}
      style={{ 
        y,
        opacity,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}

// Hook personalizado para parallax simple
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return { ref, y };
}
