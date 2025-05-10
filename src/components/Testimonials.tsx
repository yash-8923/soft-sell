import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/data';
import { fadeIn, slideInLeft, slideInRight } from '../utils/animations';
import { useInView } from 'react-intersection-observer';
import { FiMessageSquare } from 'react-icons/fi';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="testimonials" className="py-20 bg-darker">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          variants={fadeIn()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          What Our Customers Say
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <motion.div 
            className="card border border-gray-800"
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex flex-col">
              <FiMessageSquare className="text-purple-primary mb-4" size={32} />
              <p className="italic text-gray-300 mb-6">"{testimonials[0].text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-lg">{testimonials[0].name}</p>
                <p className="text-purple-secondary">
                  {testimonials[0].role}, {testimonials[0].company}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="card border border-gray-800"
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex flex-col">
              <FiMessageSquare className="text-purple-primary mb-4" size={32} />
              <p className="italic text-gray-300 mb-6">"{testimonials[1].text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-lg">{testimonials[1].name}</p>
                <p className="text-purple-secondary">
                  {testimonials[1].role}, {testimonials[1].company}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;