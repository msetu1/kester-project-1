import { Helmet } from "react-helmet-async";
import BannerImg from "../shared/BannerImg";

const MyAccount = () => {
  return (
    <div>
      <Helmet>
      <title>Kester | MY ACCOUNTING
      </title>
      </Helmet>
      <BannerImg
        subHeading={"home | My Account"}
        heading={"My Account"}
      ></BannerImg>
      <div className="flex flex-col lg:flex-row  gap-4 max-w-7xl mx-auto my-20 ">
        <div className="w-full lg:w-[50%] ">
          <h2 className="text-5xl font-bold mb-4">Login</h2>
          <div className="border p-5">
            <div className="">
              <h2 className="text-xl my-2 text-gray-500 font-bold">
                Username or email address{" "}
                <span className="text-red-600">*</span>
              </h2>
              <input
                type="email"
                name=""
                id=""
                placeholder=""
                className="w-full py-3 border"
              />
            </div>
            <div className="mb-4">
              <h2 className="text-xl my-2 text-gray-500 font-bold">
                Password <span className="text-red-600">*</span>
              </h2>
              <input
                type="email"
                name=""
                id=""
                placeholder=""
                className="w-full py-3 border"
              />
            </div>
            <button className="text-2xl font-bold bg-red-600 uppercase hover:bg-black text-white px-6 py-2">
              Login
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[50%] ">
          <h2 className="text-5xl font-bold mb-4">Register</h2>
          <div className="border p-5">
            <h2 className="text-xl my-2 text-gray-500 font-bold">
            Email address  <span className="text-red-600">*</span>
            </h2>
            <input
              type="email"
              name=""
              id=""
              placeholder=""
              className="w-full py-3 border"
            />
            <p className="mt-2">A link to set a new password will be sent to your email address.</p>
            <p className="mt-10 mb-5">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-red-600">privacy policy</span>.</p>
            <button className="text-2xl font-bold bg-red-600 hover:bg-black uppercase text-white px-6 py-2">
              Register
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyAccount;
