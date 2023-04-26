import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "./images";

const Products = () => {
  const sliderOuterRef = useRef();

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(
      sliderOuterRef.current.scrollWidth - sliderOuterRef.current.offsetWidth
    );
  }, []);
  console.log(width);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="products"
    >
      {/*Start Slider*/}
      <motion.div ref={sliderOuterRef} className="slider-outer">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="slider-inner"
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map((image, index) => (
            <motion.div className="image-item" key={index}>
              <img src={image} alt="image-fashion" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/*End Slider */}
    </motion.div>
  );
};

export default Products;
