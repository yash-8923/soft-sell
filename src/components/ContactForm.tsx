import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fadeIn } from '../utils/animations';
import { licenseTypes } from '../data/data';
import { useInView } from 'react-intersection-observer';

interface FormInputs {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // In a real application, this would send data to a server
    console.log(data);
    toast.success('Inquiry submitted! We\'ll contact you shortly.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
    reset();
  };

  // Fix for focus issues - force repainting of form elements
  useEffect(() => {
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
      (input as HTMLElement).style.opacity = '0.99';
      setTimeout(() => {
        (input as HTMLElement).style.opacity = '1';
      }, 10);
    });
  }, []);

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          variants={fadeIn()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Get in Touch
        </motion.h2>

        <motion.div 
          ref={ref}
          className="max-w-2xl mx-auto mt-12 relative z-20"
          variants={fadeIn(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="card border border-gray-800 relative"
            noValidate
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  className={`${errors.name ? 'border-red-500 shake' : 'border-gray-700'} relative z-30 focus:z-30`}
                  placeholder="Your name"
                  {...register("name", { 
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters"
                    }
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`${errors.email ? 'border-red-500 shake' : 'border-gray-700'} relative z-30 focus:z-30`}
                  placeholder="Your email address"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Company (Optional)</label>
                <input
                  id="company"
                  type="text"
                  className="border-gray-700 relative z-30 focus:z-30"
                  placeholder="Your company"
                  {...register("company")}
                />
              </div>

              <div>
                <label htmlFor="licenseType" className="block mb-2 font-medium">License Type</label>
                <select
                  id="licenseType"
                  className={`${errors.licenseType ? 'border-red-500 shake' : 'border-gray-700'} relative z-30 focus:z-30`}
                  {...register("licenseType", { required: "Please select a license type" })}
                >
                  <option value="">Select a license type</option>
                  {licenseTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.licenseType && (
                  <p className="mt-1 text-red-500 text-sm">{errors.licenseType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${errors.message ? 'border-red-500 shake' : 'border-gray-700'} relative z-30 focus:z-30`}
                  placeholder="Tell us about your license and requirements"
                  {...register("message", { 
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn btn-primary w-full relative z-30"
              >
                {isSubmitted ? 'Successfully Sent!' : 'Submit Inquiry'}
              </motion.button>
            </div>
          </form>
        </motion.div>
        <ToastContainer theme="dark" />
      </div>

      <style>
        {`
          input:focus, textarea:focus, select:focus {
            outline: 2px solid #7C3AED !important;
            outline-offset: 2px;
            box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
            position: relative;
            z-index: 30;
          }
        `}
      </style>
    </section>
  );
};

export default ContactForm;