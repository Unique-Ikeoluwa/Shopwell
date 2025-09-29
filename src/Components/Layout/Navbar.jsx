import { Link } from "react-router";
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="h-[85px] top-[1px] py-5 mx-auto flex justify-between items-center">
          <ul className="hidden lg:flex text-lg justify-center gap-x-10 text-black">
            <li className="relative group">
              <Link to="/" className="hover:text-black">
                HOME
                <span className="bg-black rounded-lg absolute -bottom-1 left-0 w-0 h-1 transition-all duration-300 ease-out group-hover:w-[50%]"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/" className="hover:text-black">
                SHOP
                <span className="bg-black rounded-lg absolute -bottom-1 left-0 w-0 h-1 transition-all duration-300 ease-out group-hover:w-[50%]"></span>
              </Link>
            </li>
          </ul>


          <h1 className="lg:text-3xl text-2xl text-black w-74 font-light lg:p-5 flex gap-[0.5px] lg:gap-2">
            shopwell
            <span className="border border-green-950 size-4 flex justify-center items-center text-xs rounded-full ">
              C
            </span>
          </h1>

          <div className="flex justify-center items-center gap-x-5">
            <button>
              {" "}
              <LuUserRound className="lg:text-3xl text-xl font-bold text-black" />
            </button>
            <button>
              <Link to="/shoppingcart">
                <FiShoppingCart className="lg:text-3xl text-xl font-bold text-black" />
              </Link>
            </button>
            

            <div className="lg:hidden flex flex-col justify-center items-end gap-[1.5px]">
              <span className="w-3 h-1 bg-black rounded-full"></span>
              <span className="w-5 h-1 bg-black rounded-full"></span>
              <span className="w-3 h-1 bg-black rounded-full"></span>
            </div>
          </div>
        </nav>
        <div className="lg:block w-[726.64px] mx-auto h-[60.55px] mt-14 hidden relative rounded-xl shadow-sm shadow-stone-500 overflow-hidden">
          <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-white bg-black">
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="search for your favourite fashion items in various colours"
            className="focus:outline-none border-none w-full h-full pl-20 text-xl text-[#939898] font-normal"
          />
        </div>

        {/* mobile search bar */}
        <div className="lg:hidden block lg:w-2/5 w-11/12 mx-auto h-14 relative rounded-xl shadow-sm shadow-stone-500 overflow-hidden">
          <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-stone-700">
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="search for your favourite totebags.."
            className="focus:outline-none border-none w-full h-full pl-14"
          />
          <button className="absolute top-1 right-2 h-12 size-12 flex justify-center gap-3 items-center bg-black rounded-lg text-white text-2xl">
            <VscSettings />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
