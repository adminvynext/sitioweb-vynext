import { motion } from 'framer-motion';

interface LogoAnimatedProps {
  className?: string;
  showText?: boolean;
}

export default function LogoAnimated({ className = '', showText = true }: LogoAnimatedProps) {
  const hexagonVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const textVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Logo SVG con hexágonos */}
      <motion.div 
        className="relative w-10 h-10"
        variants={hexagonVariants}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexágono principal con gradiente */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4b00ff" />
              <stop offset="100%" stopColor="#00d1ff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Hexágono exterior */}
          <motion.polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Hexágono interior */}
          <motion.polygon
            points="50,20 75,35 75,65 50,80 25,65 25,35"
            fill="url(#logoGradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          
          {/* Centro brillante */}
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="#ffffff"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          />
        </svg>
      </motion.div>

      {/* Texto del logo */}
      {showText && (
        <motion.span 
          className="text-2xl font-bold gradient-text"
          variants={textVariants}
        >
          Vynext
        </motion.span>
      )}
    </motion.div>
  );
}
