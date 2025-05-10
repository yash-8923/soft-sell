import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ChatWidget from './components/ChatWidget';
// import ChatWidgetPortal from './ChatWidgetPortal';
import Footer from './components/Footer';

// Lazy-loaded components
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const ChatPage = lazy(() => import('./components/ChatPage'));

// Loading spinner
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-12">
    <motion.div
      className="w-12 h-12 border-4 border-purple-primary border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-dark">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <Hero />
      <HowItWorks />
      
      <Suspense fallback={<LoadingSpinner />}>
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </Suspense>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}

function App() {
  const location = useLocation();
  
  // Only show ChatWidget on main page, not on chat page
  const isChatPage = location.pathname === '/chat';

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route 
        path="/chat" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ChatPage />
          </Suspense>
        } 
      />
    </Routes>
  );
}

export default App;