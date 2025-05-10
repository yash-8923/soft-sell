import { Variants } from 'framer-motion';

export const fadeIn = (delay: number = 0): Variants => ({
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
    rotateX: '10deg'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: '0deg',
    transition: {
      delay,
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  }
});

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    x: -100, 
    opacity: 0,
    scale: 0.9,
    rotateY: '-10deg'
  },
  visible: { 
    x: 0, 
    opacity: 1,
    scale: 1,
    rotateY: '0deg',
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    x: 100, 
    opacity: 0,
    scale: 0.9,
    rotateY: '10deg'
  },
  visible: { 
    x: 0, 
    opacity: 1,
    scale: 1,
    rotateY: '0deg',
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

export const scaleUp: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    y: 30,
    rotateX: '10deg'
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    y: 0,
    rotateX: '0deg',
    transition: {
      duration: 0.7,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

export const parallaxScroll = (scrollYProgress: any, strength: number = 100) => ({
  y: scrollYProgress.to((y: number) => y * strength),
  scale: scrollYProgress.to((y: number) => 1 - y * 0.1),
  rotateX: scrollYProgress.to((y: number) => y * 5)
});

export const hoverScale = {
  scale: 1.03,
  y: -5,
  transition: { 
    duration: 0.3,
    ease: [0.19, 1, 0.22, 1]
  }
};

export const pulseGlow: Variants = {
  initial: { 
    boxShadow: "0 0 0px rgba(124, 58, 237, 0)",
    scale: 1
  },
  animate: {
    boxShadow: [
      "0 0 0px rgba(124, 58, 237, 0)",
      "0 0 30px rgba(124, 58, 237, 0.8)",
      "0 0 0px rgba(124, 58, 237, 0)"
    ],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
};

export const floatingAnimation: Variants = {
  initial: { y: 0, rotateZ: 0 },
  animate: {
    y: [-10, 10, -10],
    rotateZ: [-1, 1, -1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const scrollReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
    rotateX: '10deg'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: '0deg',
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

export const cardStack: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: '15deg',
    transformOrigin: 'bottom'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: '0deg',
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  }
};

export const cardStackContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};