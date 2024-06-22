import { motion } from "framer-motion";
const ImgSection = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        <img
          className="lg:w-[300px] w-full lg:h-[500px]"
          src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/BLOG-9-625x595.jpg"
          alt=""
        />
      </motion.button>
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        <img
          className="lg:w-[300px] w-full lg:h-[500px]"
          src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blog-8-300x500.jpg"
          alt=""
        />
      </motion.button>
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        <img
          className="lg:w-[300px] w-full lg:h-[500px]"
          src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blog-300x500.jpg"
          alt=""
        />
      </motion.button>
    </div>
  );
};

export default ImgSection;
