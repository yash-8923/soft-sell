import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/data';
import { fadeIn, staggerContainer, hoverScale } from '../utils/animations';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          variants={fadeIn()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Why Choose SoftSell?
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              className="card hover:border-purple-primary border border-gray-800"
              variants={fadeIn()}
              whileHover={hoverScale}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-purple-primary/10 rounded-full mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-purple-primary"
                  >
                    <feature.icon size={24} />
                  </motion.div>
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;