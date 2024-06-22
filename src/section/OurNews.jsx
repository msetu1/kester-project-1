import { motion } from "framer-motion";
const OurNews = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center mb-20">
        <h1 className=" font-bold lg:text-5xl mb-4 ">OUR LATEST NEWS</h1>
        <p>
          It is one of the most popular football clubs that offer <br />
          training programs for the youth, as well as summer camps.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
          <div className="relative ">
            <img className=""
              src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/BLOG-9-410x410.jpg"
              alt=""
            />
            <div className="absolute top-48 left-10 text-white ">
              <button className="uppercase px-3 bg-red-600 text-white">
                FOOTBALL
              </button>
              <h2 className="text-xl font-bold mb-4 mt-2 pr-4 hover:text-red-700">
                WALES AREA TEAM – ROB PAGE EXPLAINS HIS SIDE’S POOR FROM
              </h2>
              <div className="flex items-center gap-3">
                <img className="rounded-full"
                  src="	https://secure.gravatar.com/avatar/a6ece554da6d5395d6720406403e3951?s=50&d=mm&r=g"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-bold mb-2">KESTER-ADMIN</h2>
                  <p>June 19, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
          <div className="relative ">
            <img className=""
              src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blog-8-410x410.jpg"
              alt=""
            />
            <div className="absolute top-48 left-10 text-white ">
              <button className="uppercase px-3 bg-red-600 text-white">
                FOOTBALL
              </button>
              <h2 className="text-xl font-bold mb-4 mt-2 pr-4 hover:text-red-700">
                WALES AREA TEAM – ROB PAGE EXPLAINS HIS SIDE’S POOR FROM
              </h2>
              <div className="flex items-center gap-3">
                <img className="rounded-full"
                  src="	https://secure.gravatar.com/avatar/a6ece554da6d5395d6720406403e3951?s=50&d=mm&r=g"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-bold mb-2">KESTER-ADMIN</h2>
                  <p>June 19, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
          <div className="relative ">
            <img className=""
              src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blog-410x410.jpg"
              alt=""
            />
            <div className="absolute top-48 left-10 text-white ">
              <button className="uppercase px-3 bg-red-600 text-white">
                FOOTBALL
              </button>
              <h2 className="text-xl font-bold mb-4 mt-2 pr-4 hover:text-red-700">
                WALES AREA TEAM – ROB PAGE EXPLAINS HIS SIDE’S POOR FROM
              </h2>
              <div className="flex items-center gap-3">
                <img className="rounded-full"
                  src="	https://secure.gravatar.com/avatar/a6ece554da6d5395d6720406403e3951?s=50&d=mm&r=g"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-bold mb-2">KESTER-ADMIN</h2>
                  <p>June 19, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurNews;
