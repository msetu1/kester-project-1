import BannerImg from "../shared/BannerImg";
import { IoMdContact } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { RiMarkPenLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const NewsDetails = () => {
  return (
    <div>
      <Helmet>
      <title>Kester | NEWS DETAILS
      </title>
      </Helmet>
      <BannerImg
        subHeading={"home | News Details"}
        heading={"WALES ARE A TEAM – ROB PAGE EXPLAINS HIS SIDE’S POOR FROM"}
      ></BannerImg>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-[60%] ">
            <div className="mb-10 lg:mx-0 mx-4 border">
              <div className=" bg-base-100 shadow-xl  border">
                <figure>
                  <img
                    src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/BLOG-9.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body px-16">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex items-center gap-3">
                      <IoMdContact className="text-2xl font-bold text-red-600" />
                      <h2 className="text-gray-500">by kester-admin</h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <RiMarkPenLine className="text-2xl font-bold text-red-600" />
                      <h2 className="text-gray-500">FOOTBALL</h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdTime className="text-2xl font-bold text-red-600" />
                      <h2 className="text-gray-500">June 19, 2023</h2>
                    </div>
                  </div>
                  <p className="mt-4 mb-10 text-gray-500">
                    A great commerce experience cannot be distilled to a single
                    number. It’s not a Lighthouse score, or a set of Core Web
                    Vitals figures, although both are important inputs. A great
                    commerce experience is a trilemma that carefully balances
                    competing needs of delivering great customer experience,
                    dynamic storefront capabilities, and long-term business —
                    conversion, retention, re-engagement — objectives. As
                    developers, we rightfully obsess about the customer
                    experience, relentlessly working to squeeze every
                    millisecond out of the critical rendering path, optimize
                    input latency, and eliminate jank. At the limit, statically
                    generated, edge delivered, and HTML-first pages look like
                    the optimal strategy. That is until you are confronted with
                    the realization that the next step function in improving
                    conversion rates and business.
                  </p>
                  <div className="mb-10">
                    <img
                      src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blogimage.jpg"
                      alt=""
                    />
                    <h2 className="card-title font-extrabold text-3xl my-6">
                      A CLEANSING HOT SHOWER OR BATH
                    </h2>
                    <p className="mb-4 text-gray-500">
                      The journey, often, starts “simple” with localization. But
                      then, quickly advances to contextual pricing, juggling
                      complexity of large and frequently updated product
                      catalog, managing continuously running multivariate tests
                      and promotion campaigns, and serving customer-tailored
                      dynamic recommendations. Eventually, you reach a
                      realization that every page is similar to an open Tetris
                      board where each “slot” can and should be dynamically
                      tailored by dynamic visitor preferences, all powered by an
                      ever-growing set of dynamic business rules.
                    </p>
                  </div>
                  <div className=" mb-10">
                    <h2 className="card-title font-extrabold text-3xl my-6">
                      SETTING THE MOOD WITH INCENSE
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <img
                        src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blogpart.jpg"
                        alt=""
                      />
                      <p className="text-gray-500">
                        From connecting back-office operations to
                        front-of-the-house A/B testing and dynamic
                        personalization for each customer, the shared foundation
                        is fast server-side rendering powered by fast storefront
                        data access. On top of this foundation, we add layers of
                        caching, prerendering and edge delivery optimizations —
                        not the other way around.
                      </p>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div className="card w-full bg-[#f6f6f6] py-10">
                      <div className="card-body items-center text-center">
                        <div className="">
                        <FaQuoteLeft className="text-4xl text-red-600 mb-4  " />
                        </div>
                        <h2 className="card-title font-bold text-2xl">Choices to take a holiday and travelling out inthis pandemic situation are limited. Why not take a stay action on quality.</h2>
                        <p className="font-bold mt-4">ROSALINA D. WILLIAM</p>
                       
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-10">
                  Surveying the existing landscape of available developer tools and runtimes, we felt that there is a gap. Enabling dynamic commerce requires close integration between server and client, an optimized streaming and data fetch strategy, and a production platform that operates at scale. These are hard technical problems that Shopify can help solve and this is why we’ve been hard at work on the Hydrogen framework. It’s a React-based framework optimized for commerce and specialized to be powered by Shopify APIs and infrastructure: The future of commerce is dynamic and personalized.
                  </p>
                  <div className="flex items-center gap-3">
<h2 className="text-xl font-bold">Tags:</h2>
<div className="">
<button className="px-3 py-2 hover:bg-red-600 bg-gray-200 font-bold hover:text-white">GameDayGurus</button>
<button className="px-3 py-2 ml-4 mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">SportsDynasty</button>
<button className="px-3 py-2 ml-4 mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">SportsMania</button>
<button className="px-3 py-2 ml-4 mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">SportsPulse</button>
<button className="px-3 py-2  mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">SportsXplorer</button>
              </div>
                  </div>
                  <div className="mt-10">
                    <h2 className="text-3xl font-bold mb-3">Leave a Reply</h2>
                    <p className="text-gray-500 mb-10">Your email address will not be published. Required fields are marked *</p>
<div className="mb-10">
    <input type="text" name="" id="" placeholder="Name*" className="p-4 border w-full text-xl mb-6" />
    <input type="email" name="" id="" placeholder="Email*" className="p-4 border w-full text-xl mb-6" />
    <textarea name="" id="" cols="30" rows="4" placeholder="Contact" className="p-4 border w-full text-xl"></textarea>
</div>
<div className="mb-20">
<button className="uppercase text-xl font-semibold p-3 bg-red-600 text-white hover:bg-black">post comment</button>
</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="w-full lg:w-[40%] ">
            <div className="border p-10 mb-8">
              <h2 className="text-2xl font-bold">Search</h2>
              <div className="mr-64">
                <div className="divider divider-error"></div>
              </div>
              <div className="flex items-center">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Searching..."
                  className="p-4 border hover:border-red-600 w-full text-xl bg-gray-200"
                />
                <div className="bg-red-600 py-5 px-6">
                  <button className="">
                    <FaSearch className="text-xl font-bold  text-white " />
                  </button>
                </div>
              </div>
            </div>
            <div className="border p-10 mb-8">
              <div>
                <h2 className="text-2xl font-bold">Recent Post</h2>
                <div className="mr-64">
                  <div className="divider divider-error"></div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-3">
                  <img
                    src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/BLOG-9-87x87.jpg"
                    alt=""
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <IoMdTime className="text-xl font-bold text-red-600" />
                      <h2 className="text-gray-500">June 19, 2023</h2>
                    </div>
                    <h3 className="text-xl font-bold  hover:text-red-600">
                      WALES ARE A TEAM – ROB PAGE EXPLAINS HIS SIDE’S POOR FROM
                    </h3>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex items-center gap-3">
                  <img
                    src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/BLOG-9-87x87.jpg"
                    alt=""
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <IoMdTime className="text-xl font-bold text-red-600" />
                      <h2 className="text-gray-500">June 19, 2023</h2>
                    </div>
                    <h3 className="text-xl font-bold  hover:text-red-600">
                      THE ACROBATIC – UCL PREMIER LEAGUE GOALS SCORED IN 2022/23
                    </h3>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blog-87x87.jpg"
                    alt=""
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <IoMdTime className="text-xl font-bold text-red-600" />
                      <h2 className="text-gray-500">June 19, 2023</h2>
                    </div>
                    <h3 className="text-xl font-bold  hover:text-red-600">
                      SPAIN BEAT CROATIA ON PENALTIES TO WIN NATIONS LEAGUE
                      FINAL
                    </h3>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/blog-7-87x87.jpg"
                    alt=""
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <IoMdTime className="text-xl font-bold text-red-600" />
                      <h2 className="text-gray-500">June 19, 2023</h2>
                    </div>
                    <h3 className="text-xl font-bold  hover:text-red-600">
                      ENGLAND TAKE THE SHOW ON THE ROAD AS FOR A START – TALKING
                      POINT
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="border p-10 mb-8">
              <div>
                <h2 className="text-2xl font-bold">Tags</h2>
                <div className="mr-64">
                  <div className="divider divider-error"></div>
                </div>
              </div>
              <div className="">
                <button className="px-3 py-2 hover:bg-red-600 bg-gray-200 font-bold hover:text-white">
                  GameDayGurus
                </button>
                <button className="px-3 py-2 ml-4 mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">
                  SportsDynasty
                </button>
                <button className="px-3 py-2 ml-4 mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">
                  SportsMania
                </button>
                <button className="px-3 py-2 ml-4 mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">
                  SportsPulse
                </button>
                <button className="px-3 py-2 ml-4 mt-4 hover:text-white hover:bg-red-600 bg-gray-200 font-bold">
                  SportsXplorer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
