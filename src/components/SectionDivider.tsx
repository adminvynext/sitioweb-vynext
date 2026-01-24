import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'wave' | 'geometric' | 'gradient';
  flip?: boolean;
}

export default function SectionDivider({ variant = 'wave', flip = false }: SectionDividerProps) {
  if (variant === 'gradient') {
    return (
      <div className={`relative h-32 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: 'linear-gradient(45deg, #4b00ff 0%, transparent 30%, #00d1ff 60%, transparent 100%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>
    );
  }

  if (variant === 'geometric') {
    return (
      <div className={`relative h-24 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b00ff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#7000ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 L100,30 L200,60 L300,20 L400,55 L500,25 L600,50 L700,30 L800,60 L900,20 L1000,55 L1100,30 L1200,50 L1200,100 L0,100 Z"
            fill="url(#dividerGrad)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    );
  }

  // Wave variant (default)
  return (
    <div className={`relative h-20 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4b00ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGrad)"
          animate={{
            d: [
              'M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z',
              'M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z',
              'M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}
