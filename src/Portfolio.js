import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <div>
      <h2>Our Portfolio</h2>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}>
        <img src="project1.jpg" alt="Project 1" />
        <h3>XYZ Coffee Co.</h3>
        <p>
          We redesigned XYZ Coffee Co.'s website, which resulted in a 50% increase in online orders and a 20% increase in foot traffic to their local store.
        </p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}>
        <img src="project2.jpg" alt="Project 2" />
        <h3>ABC Bakery</h3>
        <p>
          By optimizing ABC Bakery's SEO and creating a social media campaign, we helped them grow their online customer base by 35% within 3 months.
        </p>
      </motion.div>
    </div>
  );
}

export default Portfolio;
