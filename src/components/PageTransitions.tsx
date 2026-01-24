import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Variantes de transición para páginas
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}

// Transición de fade
export const fadeTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  },
};

// Transición de slide
export const slideTransition = {
  initial: { x: '100%' },
  animate: { 
    x: 0,
    transition: { 
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
  exit: { 
    x: '-100%',
    transition: { 
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
};

// Transición de zoom
export const zoomTransition = {
  initial: { 
    opacity: 0,
    scale: 0.8
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
  exit: { 
    opacity: 0,
    scale: 1.1,
    transition: { 
      duration: 0.3
    }
  },
};

// Transición de rotación
export const rotateTransition = {
  initial: { 
    opacity: 0,
    rotate: -10,
    scale: 0.9
  },
  animate: { 
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
  exit: { 
    opacity: 0,
    rotate: 10,
    scale: 0.9,
    transition: { 
      duration: 0.3
    }
  },
};

// Componente de transición customizable
interface CustomTransitionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'zoom' | 'rotate';
}

export function CustomTransition({ 
  children, 
  className = '',
  variant = 'fade'
}: CustomTransitionProps) {
  const transitions = {
    fade: fadeTransition,
    slide: slideTransition,
    zoom: zoomTransition,
    rotate: rotateTransition,
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={transitions[variant]}
    >
      {children}
    </motion.div>
  );
}

// Transición para modales
export const modalTransition = {
  initial: { 
    opacity: 0,
    scale: 0.9,
    y: 20
  },
  animate: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.3,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { 
      duration: 0.2
    }
  },
};

// Backdrop para modales
export const backdropTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  },
};

interface ModalWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function ModalWrapper({ children, isOpen, onClose, className = '' }: ModalWrapperProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            variants={backdropTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className={`relative bg-[var(--color-bg-light)] rounded-2xl shadow-2xl max-w-2xl w-full ${className}`}
              variants={modalTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
