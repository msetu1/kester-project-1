const NewsLetter = () => {
  return (
    <div className=" my-20"style={{
        backgroundImage:
          "url(	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/newsletter-bg.jpg)",
      }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%]  pt-28">
          <div
            className=" bg-white py-24 px-10"
            style={{
              backgroundImage:
                "url(https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/shape-300x185.png)",
            }}
          >
            <h1 className=" font-bold lg:text-5xl mb-4 ">CLUB MEMBERS</h1>
            <p className="mt-4 pb-10">
              It is one of the most popular football clubs that offer <br />
              training programs for the youth, as well as summer camps.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-ed w-full  bg-gray-200 "
              />
              <button className="px-4 py-3 bg-red-700 text-xl font-bold text-white rounded-e-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] ">
          <img
            src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/player3-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
