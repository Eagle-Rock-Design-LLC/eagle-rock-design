import { motion } from 'framer-motion';

function MovingElements() {
  return (
    <div>
      <motion.h2 
        animate={{ x: 100 }} 
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}>
        Welcome to Eagle Rock Design LLC
      </motion.h2>
      <motion.p
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}>
        Helping small businesses improve their marketing.
      </motion.p>
    </div>
  );
}

export default MovingElements;
