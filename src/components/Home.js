import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
      }}
      className="home"
    ></motion.div>
  );
};

export default Home;
