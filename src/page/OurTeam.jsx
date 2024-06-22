import { Helmet } from "react-helmet-async";
import BannerImg from "../shared/BannerImg";

const OurTeam = () => {
  return (
    <div>
        <Helmet>
      <title>Kester | OUR TEAM
      </title>
      </Helmet>
      <BannerImg
        subHeading={"home | Our Team"}
        heading={"Our Team"}
      ></BannerImg>
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mb-20">
        <div className="lg:mx-0 mx-3">
          <div className=" bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team03.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">GOALKEEPER</p>
              <h2 className=" font-bold text-2xl mb-2">MORIS BADE</h2>
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-3">
          <div className=" bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team07.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">MIDFIELDER</p>
              <h2 className=" font-bold text-2xl mb-2">MASON EWING</h2>
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-3">
          <div className=" bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team04.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">FORWARD</p>
              <h2 className=" font-bold text-2xl mb-2">HUGO STONES</h2>
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-3">
          <div className="bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/player-1.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">FORWARD</p>
              <h2 className=" font-bold text-2xl mb-2">TRISTIAN HOLME</h2>
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-3">
          <div className=" bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team08.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">FORWARD</p>
              <h2 className=" font-bold text-2xl mb-2">BLAKE BANNAN</h2>
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-3">
          <div className=" bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/player-2.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">FORWARD</p>
              <h2 className=" font-bold text-2xl mb-2">KOBY BROUGH</h2>
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-3">
          <div className=" bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team06.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">FORWARD</p>
              <h2 className=" font-bold text-2xl mb-2">FINN ROSETTA</h2>
            </div>
          </div>
        </div>
        <div className="lg:mx-0 mx-3">
          <div className=" bg-base-100 shadow-xl border">
            <figure>
              <img
                className="bg-[#f6f6f6]  w-full p-5"
                src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/team05.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p className="uppercase text-gray-500 ">FORWARD</p>
              <h2 className=" font-bold text-2xl mb-2">ARCHIE STEAD</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold">COACH SAM FOSTER</h2>
        <div className="divider"></div>
<div className="flex flex-col lg:flex-row gap-10 items-center">
    <img src="https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/financial-250x300.jpg" alt="" />
    <div className="">
    <div className="overflow-x-auto">
  <table className="table">
    
    <tbody>
      {/* row 1 */}
      <tr>
        <td className="text-xl font-bold text-gray-500">NATIONALITY</td>
        <td className="text-red-600 text-xl">PALESTINE</td>
        
      </tr>
      {/* row 2 */}
      <tr className="hover">
        
        <td className="text-xl font-bold text-gray-500">CURRENT TEAM</td>
        <td className="text-red-600 text-xl">THE EAGLES ATHLETIC SUPER, THE FALCONS UNITED TEAM, THE RAVENS ATHLETIC KING, THE SHARKS ATHLETIC KING</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <td className="text-xl font-bold text-gray-500">PAST TEAMS</td>
        <td className="text-red-600 text-xl">THE JAGUARS FC UNITED</td>
      </tr>
      <div className="divider"></div>
    </tbody>
    
  </table>
</div>
    </div>
</div>
      </div>
      <div className="mb-20">
      <h2 className="text-3xl font-bold">FINANCIAL ADVISOR JOSE MOURIN</h2>
      <div className="divider"></div>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
    <img src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2023/06/coach-250x300.jpg" alt="" />
    <div className="">
    <div className="overflow-x-auto">
  <table className="table">
    
    <tbody>
      {/* row 1 */}
      <tr>
        <td className="text-xl font-bold text-gray-500">NATIONALITY</td>
        <td className="text-red-600 text-xl">AUSTRIA</td>
        
      </tr>
      {/* row 2 */}
      <tr className="hover">
        
        <td className="text-xl font-bold text-gray-500">CURRENT TEAM</td>
        <td className="text-red-600 text-xl">THE EAGLES ATHLETIC SUPER, THE FALCONS UNITED TEAM, THE RAVENS ATHLETIC KING, THE SHARKS ATHLETIC KING</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <td className="text-xl font-bold text-gray-500">PAST TEAMS</td>
        <td className="text-red-600 text-xl">THE JAGUARS FC UNITED</td>
      </tr>
      <div className="divider"></div>
    </tbody>
    
  </table>
</div>
    </div>
</div>
      </div>
      </div>
    </div>
  );
};

export default OurTeam;
