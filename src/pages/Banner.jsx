const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: "url(https://i.ibb.co/hg5nYTY/download.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="pb-20">
            <button className="uppercase text-xl font-bold bg-red-800 opacity-40 mb-5 px-3 py-2 mt-48">
              Welcome to my football club
            </button>
            <h1 className="mb-5  lg:text-7xl md:text-7xl text-4xl font-bold">
              HENDERSON & THE UCL CHAMPION
            </h1>
            <p className="mb-10 font-bold lg:text-xl">
              Introducing the dynamic and captivating SportPress WordPress
              theme, designed to cater <br />
              to the needs of sports enthusiasts, athletes, and sports-related
              businesses.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a className="px-6 py-2 bg-black   font-bold text-xl text-white hover:bg-red-700">
                OUR TEAM
              </a>
              <a className="px-6 py-2  bg-red-700  font-bold text-xl text-white hover:bg-black">
                NEXT MATCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
