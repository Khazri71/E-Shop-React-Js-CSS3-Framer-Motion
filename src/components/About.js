import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
     
      className="about"
    >
      <h1>About Us</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nihil.
        Quos iste minus, ad sapiente maiores libero tempore consequuntur sequi
        neque voluptatibus similique magni. Nostrum placeat possimus sit quas
        inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nihil.
        Quos iste minus, ad sapiente maiores libero tempore consequuntur sequi
        neque voluptatibus similique magni. Nostrum placeat possimus sit quas
        inventore?
      </p>
    </motion.div>
  );
};

export default About;
