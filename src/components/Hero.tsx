import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn, cardStack, cardStackContainer } from '../utils/animations';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-darkest via-darker to-dark"
      initial="hidden"
      animate="visible"
      variants={cardStackContainer}
      style={{ scale }}
    >
      {/* Enhanced animated background with glowing bubbles */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Large glowing bubbles with enhanced effects */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center, rgba(124, 58, 237, 0.4) 0%, transparent 70%)`,
              filter: 'blur(40px)',
              boxShadow: '0 0 60px rgba(124, 58, 237, 0.4)',
            }}
            animate={{
              y: [0, -70, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-purple-primary/40"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 10px rgba(124, 58, 237, 0.6)',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 70 - 35, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-20"></div>
      </motion.div>

      {/* Enhanced Content */}
      <div className="container mx-auto px-4 pt-24 pb-12 text-center relative z-10">
        <motion.div
          style={{ y: textY, opacity }}
          className="space-y-8"
          variants={cardStack}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 max-w-4xl mx-auto"
            variants={fadeIn(0.2)}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
              Sell Your Software Licenses
              <span className="block mt-2">Effortlessly</span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300"
            variants={fadeIn(0.4)}
          >
            Unlock top value for your unused licenses in three simple steps.
          </motion.p>
          
          <motion.div 
            variants={fadeIn(0.6)}
            className="relative inline-block group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-lg blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <a 
              href="#contact" 
              className="relative btn btn-primary text-lg px-8 py-4"
            >
              Get Started Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced bottom wave with glow */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-primary/10 to-transparent blur-2xl"></div>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-20 md:h-32 text-darker"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.91,12.52,146.51,28.55,214.86,44.48Z" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;