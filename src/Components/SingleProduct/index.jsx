import { BsHandbag } from "react-icons/bs";
import SaleBanner from "../SaleBanner";
import { Link } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import "./index.css";
import QuickView from "../QuickView";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context";

export default function SingleProduct({ name, src, price, sale, slug, oldPrice, category }) {
  let { quickViewProduct, setQuickViewProduct } = useContext(UserContext);

  return (
    <Link
      to={`/shop/products/${slug}`}
      className="product-box relative flex flex-col lg:p-5 p-2 bg-white border-gray-200 border rounded hover:shadow-sm hover:shadow-green-500 hover:border hover:border-black"
    >
      {sale ? <SaleBanner price={price} oldPrice={oldPrice} /> : null}
      <img
        src={`http://localhost:1337${src}`}
        alt=""
        className="h-40 object-contain"
      />
      <div className="flex items-center justify-between">
        <div className="text flex flex-col gap-1">
          <p className="text-xs text-gray-900">{name}</p>
          <p className="font-semibold text-sm">${price.toFixed(2)}</p>
          <img src="src\Assets\rating.png" alt="" className="w-10" />
        </div>
        <div className="bg-gray-200 p-2 rounded-full">
          <BsHandbag className="text-xs" />
        </div>
      </div>
      <button
        className="quick-view absolute right-5 bg-gray-200 p-2 rounded-full hidden cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setQuickViewProduct({ name, src, price, sale, oldPrice, category });
        }}
      >
        <IoEyeOutline />
      </button>
    </Link>
  );
}
