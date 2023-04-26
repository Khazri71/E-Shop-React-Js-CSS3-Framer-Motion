import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="contact"
    >
      <form>
        <input type="email" placeholder="Your Email" />

        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="Write Your Message ..."
        ></textarea>
        <br />
        <button>Send</button>
      </form>
    </motion.div>
  );
};

export default Contact;
