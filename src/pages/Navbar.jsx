import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
const Navbar = () => {
  const links = (
    <>
    {/* home  */}
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 text-red-700"
              : ""
          }
        >
          HOME
        </NavLink>
      </li>
      {/* about  */}
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 text-red-600"
              : ""
          }
        >
          ABOUT
        </NavLink>
      </li>
      {/* page  */}
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="hover:text-red-600">
              PAGE
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52 text-black"
            >
              <li>
              <NavLink
          to="/ourTeam"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          OUR TEAM
        </NavLink>
              </li>
              <li>
              <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          GALLERY
        </NavLink>
              </li>
              <li>
              <NavLink
          to="/matchDetail"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          MATCH DETAILS
        </NavLink>
              </li>
              
            </ul>
          </div>
        </NavLink>
      </li>
      {/* shop  */}
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="hover:text-red-600">
              SHOP
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52 text-black"
            >
              <li>
              <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          SHOP
        </NavLink>
              </li>
              <li>
              <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          CART
        </NavLink>
              </li>
              <li>
              <NavLink
          to="/myAccount"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
         MY ACCOUNTING
        </NavLink>
              </li>
              
            </ul>
          </div>
        </NavLink>
      </li>
      {/* news  */}
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="hover:text-red-600">
              NEWS
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52 text-black"
            >
              <li>
              <NavLink
          to="/news"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          NEWS
        </NavLink>
              </li>
              <li>
              <NavLink
          to="/newsDetails"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 "
              : ""
          }
        >
          NEWS DETAILS
        </NavLink>
              </li>
             
            </ul>
          </div>
        </NavLink>
      </li>
      {/* contact  */}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold hover:text-red-600 text-red-600"
              : ""
          }
        >
          CONTACT
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black bg-opacity-30 fixed z-10 lg:px-20 md:px-20 py-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul tabIndex={0} className="menu  dropdown-content ">
              {links}
            </ul>
          </div>
          <div className="lg:block  hidden">
            <div className="flex items-center justify-center gap-3">
              <img
                className="w-[80px] h-[80px] rounded-xl"
                src="https://i.ibb.co/wc0Q4Gy/images.png"
                alt=""
              />
              <h2 className="text-3xl font-bold text-white">
                rf <span className="text-red-700">Kester</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-5 items-center text-white text-xl font-bold ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="p-4 bg-red-700 hover:bg-white hover:text-black  text-2xl text-white rounded-full">
            <GoSearch />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
