import { Helmet } from "react-helmet-async";
import BannerImg from "../shared/BannerImg";
import { motion } from "framer-motion";
const Gallery = () => {
    return (
        <div>
            <Helmet>
      <title>Kester | GALLERY
      </title>
      </Helmet>
            <BannerImg
        subHeading={"home | gallery"}
        heading={"gallery"}
      ></BannerImg>
      <div className="max-w-7xl mx-auto mb-20 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
<img src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/full6.png" alt="" />
</motion.div>
<motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
<img src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/full5.png" alt="" />
</motion.div>
<motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
<img src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/full4.png" alt="" />
</motion.div>
<motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
<img src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/full3.png" alt="" />
</motion.div>
<motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
<img src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/full2.png" alt="" />
</motion.div>
<motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
<img src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/full1.png" alt="" />
</motion.div>
      </div>
        </div>
    );
};

export default Gallery;