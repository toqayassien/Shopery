import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { UserContext } from "../../Context";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

export default function QuickView({
  name,
  src,
  price,
  sale, 
  oldPrice,
  category,
}) {
  let { quickViewProduct, setQuickViewProduct } = useContext(UserContext);
  const percent = ((oldPrice - price) / oldPrice) * 100;
  return (
    <div className="flex flex-row gap-2 fixed inset-0 h-screen w-screen mx-auto z-20 justify-center items-center bg-black/60">
      <div className="relative bg-white w-220 h-110 rounded-sm">
        <div className="grid grid-cols-8 h-full items-center">
          <div className="col-span-4 grid grid-cols-4">
            <div className="p-4">
              <img
                src={`http://localhost:1337${src}`}
                alt=""
                className="rotate-45"
              />
              <img
                src={`http://localhost:1337${src}`}
                alt=""
                className="rotate-90"
              />
              <img
                src={`http://localhost:1337${src}`}
                alt=""
                className="-rotate-45"
              />
              <img
                src={`http://localhost:1337${src}`}
                alt=""
                className="-rotate-90"
              />
            </div>
            <img
              src={`http://localhost:1337${src}`}
              alt=""
              className="col-span-3 row-span-4 object-contain w-full h-full"
            />
          </div>
          <div className="col-span-4 flex flex-col h-full p-5">
            <p className="text-3xl font-poppins font-semibold capitalize">
              {name}
            </p>
            <div className="flex flex-row items-center gap-2 mt-2">
              <div className="flex flex-row items-center">
                <FaStar className="text-xs text-orange-400" />
                <FaStar className="text-xs text-orange-400" />
                <FaStar className="text-xs text-orange-400" />
                <FaStar className="text-xs text-orange-400" />
                <FaStar className="text-xs text-orange-400" />
                <p className="text-xs px-2 text-gray">4 Reviews</p>
              </div>
              <GoDotFill className="text-gray text-[5px]" />
              <p className="text-xs text-gray">
                <span className="font-semibold text-black">SKU:</span>1225285
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center mt-2">
              {oldPrice && (
                <p className="line-through text-gray-400">${oldPrice}</p>
              )}

              <p className="font-semibold text-green-600">${price}</p>
              {oldPrice && (
                <p className="py-1 px-2 bg-red-50 rounded-2xl text-xs font-semibold text-red-500">
                  {percent.toFixed()}% OFF
                </p>
              )}
            </div>
            <hr className="text-gray-300 my-4" />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-1">
                <p className="text-xs">Brand:</p>
                <img src="src/Assets/farmary.png" alt="" className="w-10" />
              </div>
              <div className="flex flex-row items-center gap-1">
                <p className="text-xs">Share Item: </p>
                <div className=" flex items-center justify-center gap-2">
                  <a
                    href="https://www.facebook.com/"
                    className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="https://x.com/"
                    className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500"
                  >
                    <FaTwitter className="text-sm" />
                  </a>
                  <a
                    href="https://uk.pinterest.com/"
                    className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500"
                  >
                    <FaPinterestP className="text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray mt-4">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
            <hr className="text-gray-300 my-4" />
            <p>form space</p>
            <hr className="text-gray-300 my-4" />
            <p className="text-xs font-semibold font-poppins">
              Category:{" "}
              <span className="text-gray font-normal">{category}</span>
            </p>
          </div>
        </div>
        <button
          className="cursor-pointer text-white absolute -top-8 right-1"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setQuickViewProduct(null);
          }}
        >
          <IoCloseOutline />
        </button>
      </div>
    </div>
  );
}
