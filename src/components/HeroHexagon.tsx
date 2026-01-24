import { motion } from 'framer-motion';

export default function HeroHexagon() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* 1. Top Right - Large - Clockwise */}
            <motion.div
                className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 -z-10 opacity-40 w-[800px] h-[800px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            >
                <svg width="800" height="800" viewBox="0 0 100 100" className="stroke-primary fill-none stroke-[0.15]">
                    <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
                </svg>
            </motion.div>

            {/* 2. Bottom Left - Medium - Counter-clockwise */}
            <motion.div
                className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 -z-10 opacity-70 w-[600px] h-[600px]"
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                <svg width="600" height="600" viewBox="0 0 100 100" className="stroke-secondary fill-none stroke-[0.2]">
                    <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
                </svg>
            </motion.div>

            {/* 3. Center Right (Floating) - Small - Clockwise faster */}
            <motion.div
                className="absolute top-1/2 right-[10%] -translate-y-1/2 -z-10 opacity-50 w-[300px] h-[300px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
                <svg width="300" height="300" viewBox="0 0 100 100" className="stroke-primary fill-none stroke-[0.25] opacity-60">
                    <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
                </svg>
            </motion.div>

            {/* 4. Top Left (Off-screen) - Extra Large - Counter-clockwise very slow */}
            <motion.div
                className="absolute top-0 left-[20%] -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10 w-[600px] h-[600px]"
                animate={{ rotate: -360 }}
                transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
            >
                <svg width="600" height="600" viewBox="0 0 100 100" className="stroke-gray-900 fill-none stroke-[0.3]">
                    <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
                </svg>
            </motion.div>

            {/* 5. Bottom Center (Accent) - Tiny */}
            <motion.div
                className="absolute bottom-[10%] left-[60%] -z-10 opacity-60 w-[150px] h-[150px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <svg width="150" height="150" viewBox="0 0 100 100" className="stroke-secondary fill-none stroke-[0.3]">
                    <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
                </svg>
            </motion.div>
        </div>
    );
}
