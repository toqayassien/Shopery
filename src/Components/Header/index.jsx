import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { PiPhoneCallLight } from "react-icons/pi";
import SignUp from "../../Pages/SignUp";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/index.jsx";
import axios from "axios";
import "./index.css";

export default function Header() {
  const [searchValue, setSearchValue] = useState("search");
  const { jwt, setJwt } = useContext(UserContext);
  const { cart, setCart } = useContext(UserContext);
  const { cartTotal, setCartTotal } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  let token = JSON.parse(localStorage.getItem("token")) || null;

  function handleSignOut() {
    localStorage.removeItem("token");
    setJwt(null);
    token = null;
    setCartTotal(0)
    setCart(null)
    setUser([
      {
        "username" : "NA",
        "cart" :{
          "cartTotal" : 0
        }
      }
    ])
  }

  async function handleSearch(e) {
    e?.preventDefault();
    try {
      const search = await axios.get(
        `http://localhost:1337/api/products?filters[name][$contains]=${searchValue}&populate=*`,
      );
      const result = search.data.data;
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    handleSearch();
  }, [searchValue]);
  return (
    <div className="">
      <div className="header-top flex md:flex-row gap-2 justify-between items-center text-xs border-b border-gray-300 px-2 py-2 md:px-10 md:py-2">
        <p className="hidden w-full md:flex items-center text-[8px] md:text-xs">
          <CiLocationOn className="text-sm" />
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
        <div className="flex justify-between md:justify-end w-full gap-3 items-center text-[8px] md:text-xs">
          <form className="lang-currency-form">
            <select name="lang" id="lang">
              <option value="ENG">Eng</option>
              <option value="AR">Ar</option>
            </select>
            <select name="currency" id="currency">
              <option value="USD">USD</option>
              <option value="EGP">EGP</option>
            </select>
          </form>
          <p className="hidden md:block">|</p>
          <p>
            {jwt ? (
              <button onClick={handleSignOut} className="cursor-pointer">
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/login">Sign In</Link> /{" "}
                <Link to="/signUp">Sign Up</Link>
              </>
            )}
          </p>
        </div>
      </div>
      <div className="header-mid flex justify-between items-center border-b border-gray-300 py-1 px-2 md:px-10 lg:px-20">
        <Link to="/">
          <img src="Public\Logo.png" alt="" className="w-20 md:w-30" />
        </Link>
        <form className="hidden md:flex" onSubmit={handleSearch}>
          <div className="relative search-box flex items-center">
            <label
              for="searchInput"
              className="absolute left-2 text-lg md:text-sm"
            >
              <IoIosSearch />
            </label>
            <input
              id="searchInput"
              type="text"
              placeholder={"Search"}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              className="py-2 pr-20 pl-8 rounded-l-lg border border-gray-300 text-sm md:py-1 md:pr-10 md:pl-6"
            />
          </div>
          <button
            type="Submit"
            className="bg-green-600 text-white font-semibold py-1 px-6 rounded-r-lg text-sm cursor-pointer md:px-3 md:text-xs"
          >
            Search
          </button>
        </form>
        <div className="flex items-center gap-2 justify-center text-xs lg:text-sm">
          <GoHeart />
          <p className="font-thin">|</p>
          <Link to="/cart" className="flex items-center gap-2">
            <BsHandbag />
            <div className="flex flex-col text-[8px] md:text-sm">
              <p>Shopping cart:</p>
              <b>${cartTotal ? cartTotal.toFixed(2): `0.00`}</b>
            </div>
          </Link>
        </div>
      </div>
      <div className="header-bottom flex flex-col md:flex-row justify-between items-center py-2 px-5 md:px-10 lg:px-20 bg-[#1A1A1A] text-white">
        <nav className="flex gap-4 text-[8px] md:text-sm">
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="faq">FAQ</Link>
          <Link to="blog">Blog</Link>
          <Link to="about">About Us</Link>
          <Link to="contact">Contact Us</Link>
        </nav>
        <div className="hidden md:flex gap-2">
          <PiPhoneCallLight className="text-lg" />
          <p className="text-xs">(219)- 555 - 0114</p>
        </div>
      </div>
    </div>
  );
}
