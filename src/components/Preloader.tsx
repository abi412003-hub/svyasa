import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-cream"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{
              scale: { duration: 0.5 },
              opacity: { duration: 0.5 },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            }}
            className="relative"
          >
            {/* Lotus/Mandala SVG */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              {/* Center circle */}
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              
              {/* Lotus petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.path
                  key={i}
                  d={`M50 50 Q${50 + 20 * Math.cos((angle * Math.PI) / 180)} ${
                    50 + 20 * Math.sin((angle * Math.PI) / 180)
                  } ${50 + 35 * Math.cos((angle * Math.PI) / 180)} ${
                    50 + 35 * Math.sin((angle * Math.PI) / 180)
                  } Q${50 + 20 * Math.cos(((angle + 22.5) * Math.PI) / 180)} ${
                    50 + 20 * Math.sin(((angle + 22.5) * Math.PI) / 180)
                  } 50 50`}
                  fill="currentColor"
                  opacity={0.7 + (i % 2) * 0.3}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                />
              ))}
            </svg>
            
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-1/3 text-navy font-body text-sm tracking-widest uppercase"
          >
            S-VYASA
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
