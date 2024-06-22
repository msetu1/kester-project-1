import { Helmet } from "react-helmet-async";
import BannerImg from "../shared/BannerImg";

const MatchDetails = () => {
    return (
        <div>
            <Helmet>
      <title>Kester | MATCH DETAILS
      </title>
      </Helmet>
            <BannerImg
        subHeading={"home | EAGLES ATHLETIC SUPER VS RAVENS ATHLETIC KING"}
        heading={"EAGLES ATHLETIC SUPER VS RAVENS ATHLETIC KING"}
      ></BannerImg>
<div className="max-w-7xl mx-auto my-20">
    <div className="">
    <div className=" bg-base-100 shadow-xl">
  <figure><img className="w-full" src="	https://themewant.com/products/wordpress/kester/wp-content/uploads/2022/03/event-2.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold my-8">RECAP</h2>
    <p className="text-gray-500 mb-5">Quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, nihil consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetuer</p>
    
  </div>
</div>
    </div>
    <div className="">
    <h2 className=" text-4xl font-bold my-8">DETAILS</h2>
    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       <th className="uppercase text-xl font-bold text-black bg-gray-200">Date</th>
        <th className="uppercase text-xl font-bold text-black bg-gray-200">time</th>
        <th className="uppercase text-xl font-bold text-black bg-gray-200">league</th>
        <th className="uppercase text-xl font-bold text-black bg-gray-200">season</th>
      </tr>
    </thead>
    <tbody className="">
      {/* row 1 */}
      <tr>
        <th className="uppercase  text-gray-500">June 19, 2023</th>
        <th className="uppercase   text-gray-500">12:23 pm</th>
        <th className="uppercase   text-gray-500">	Primary League</th>
        <th className="uppercase   text-gray-500">2023</th>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    </div>
    <div className="mt-20">
    <h2 className=" text-4xl font-bold my-8">RESULTS</h2>
    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       <th className="uppercase text-xl font-bold text-black bg-gray-200">CLUB</th>
        <th className="uppercase text-xl font-bold text-black bg-gray-200">1ST HALF</th>
        <th className="uppercase text-xl font-bold text-black bg-gray-200">2ND HALF</th>
        <th className="uppercase text-xl font-bold text-black bg-gray-200">GOALS</th>
      </tr>
    </thead>
    <tbody className="">
      {/* row 1 */}
      <tr>
        <th className="uppercase  text-gray-500">The Eagles Athletic Super</th>
        <th className="uppercase   text-gray-500">1</th>
        <th className="uppercase   text-gray-500">	2</th>
        <th className="uppercase   text-gray-500">3</th>
      </tr>
      {/* row 1 */}
      <tr>
        <th className="uppercase  text-gray-500">The Ravens Athletic King</th>
        <th className="uppercase   text-gray-500">0</th>
        <th className="uppercase   text-gray-500">1</th>
        <th className="uppercase   text-gray-500">0</th>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    </div>
</div>
        </div>
    );
};

export default MatchDetails;