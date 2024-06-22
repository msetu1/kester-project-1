import { Helmet } from "react-helmet-async";
import BannerImg from "../shared/BannerImg";

const Shop = () => {
  return (
    <div>
      <Helmet>
      <title>Kester | SHOP
      </title>
      </Helmet>
      <BannerImg subHeading={"home | Shop"} heading={"SHOP"}></BannerImg>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <h2 className="text-xl font-bold">Showing all 9 results</h2>
          <div>
            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <details open>
                  <summary>Default shorting</summary>
                  <ul>
                    <li>
                      <a>Default shorting</a>
                    </li>
                    <li>
                      <a>Short by popularity</a>
                    </li>
                    <li>
                      <a>Short by latest</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-20">
          <div className=" lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
              <img
                className="w-full"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-3-300x300.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                TELSTAR TOP GLIDER FOOTBALL
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
              <img
                className="w-full"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-8-300x300.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              ATHLETIC TRAINING BOOTS
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $24.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
              <img
                className="w-full"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-6-300x300.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              ATHLETIC FOOTBALL TRAINING CAP
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
              <img className="w-full" src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-2-1-300x300.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              FOOTBALL TRAINING BOOTS
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
              <img
                className="w-full"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-4-300x300.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              MEN FOOTBALL SHOES BOOTS

              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
             <img className="w-full" src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-5-300x300.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              MEN FOOTBALL GLOVES
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
              <img className="w-full" src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-7-300x300.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              MEN FOOTBALL JERSEY
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border">
            <figure>
              <img className="w-full" src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/d-9-300x300.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              MEN FOOTBALL POLO
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
          <div className="  lg:w-96 w-full bg-base-100 shadow-xl border ">
            <figure>
              <img className="w-full" src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/dress-1-300x300.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              T-SHIRT
              </h2>
              <h2 className="text-red-600 text-center font-bold mt-3 text-xl">
                $50.00
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
