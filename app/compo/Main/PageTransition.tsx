import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const variants = {
    initial: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95, 
      rotateX: 10, 
      transformOrigin: "top" 
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      transformOrigin: "top", 
      transition: { duration: 0.0, ease: "easeInOut" } 
    },
    exit: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95, 
      rotateX: -10, 
      transformOrigin: "top", 
      transition: { duration: 0.0, ease: "easeInOut" } 
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
