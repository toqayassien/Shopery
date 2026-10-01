import { useContext, useState, useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import PopularCategories from "../../Components/PopularCategories";
import ProductsDisplay from "../../Components/ProductsDisplay";
import DealBanners from "../../Components/DealBanners";
import HotDeals from "../../Components/HotDeals";
import { UserContext } from "../../Context";
import QuickView from "../../Components/QuickView";
import { GoArrowRight } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";

import "./index.css";

export default function Home() {
  const popularProductsToShow = 10;
  const featuredProductsToShow = 5;
  const [products, setProducts] = useState([]);
  const { quickViewProduct, setQuickViewProduct } = useContext(UserContext);

  async function getProducts() {
    const output = await fetch(`http://localhost:1337/api/products?populate=*`);
    const data = await output.json();
    setProducts(data.data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="hero">
        <div className="hero-top grid grid-cols-3 grid-rows-4 px-20 py-4 h-screen gap-4">
          <div className="hero-banner-1 col-span-2 row-span-4 p-10 flex flex-col items-start justify-center gap-8">
            <p className="text-5xl text-white font-semibold font-poppins">
              Fresh & Healthy <br /> Organic Food
            </p>
            <div className="flex flex-col gap-2 border-l-2 border-green-300 pl-4 ">
              <p className="text-white text-lg font-poppins">
                Sale up to{" "}
                <span className="bg-orange-400 text-lg py-2 px-3 rounded">
                  30% OFF
                </span>
              </p>
              <p className="text-white text-sm font-poppins">
                Free shipping on all your order.
              </p>
            </div>
            <button className="bg-white text-sm py-2 px-8 text-green-500 flex items-center gap-1 rounded-full font-bold">
              Shop Now <GoArrowRight />
            </button>
          </div>
          <div className="hero-banner-2 row-span-2 flex flex-col items-start gap-1 pl-4 pt-6 rounded">
            <p className="uppercase text-sm font-poppins">summer sale</p>
            <p className="font-poppis font-semibold text-3xl">75% OFF</p>
            <p className="text-gray font-sm">Only fruit & vegetables</p>
            <button className="text-sm mt-4 text-green-500 flex items-center gap-1 rounded-full font-bold">
              Shop Now <GoArrowRight />
            </button>
          </div>
          <div className="hero-banner-3 row-span-2 flex flex-col justify-center items-center gap-3 rounded px-2">
            <p className="text-white font-poppins uppercase text-sm">
              Best Deals
            </p>
            <p className="text-white font-poppins text-3xl font-semibold capitalize text-center">
              Special products <br /> deal of the month
            </p>
            <button className="text-sm text-green-500 flex items-center gap-1 rounded-full font-bold">
              Shop Now <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mx-20 px-6 py-6 shadow-xl rounded">
          <div className="flex items-center gap-2">
            <TbTruckDelivery className="text-4xl text-green-500" />
            <div>
              <h4 className="font-semibold text-md">Free Shipping</h4>
              <p className="text-xs text-gray">
                Free Shipping on all your orders
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TbTruckDelivery className="text-4xl text-green-500" />
            <div>
              <h4 className="font-semibold text-md">Customer Support 24/7</h4>
              <p className="text-xs text-gray">Instant access to support</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TbTruckDelivery className="text-4xl text-green-500" />
            <div>
              <h4 className="font-semibold text-md">100% Secure Payment</h4>
              <p className="text-xs text-gray">We ensure your money is safe</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TbTruckDelivery className="text-4xl text-green-500" />
            <div>
              <h4 className="font-semibold text-md">Money-Back Guarantee</h4>
              <p className="text-xs text-gray">30 Days Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
      <PopularCategories />
      <ProductsDisplay
        productsToShow={popularProductsToShow}
        products={products}
        title="Popular Products"
      />
      <DealBanners />
      <HotDeals products={products} />
      <div className="px-20 py-10">
        <div className="summer-sale-banner h-80 rounded flex justify-end">
          <div className="p-15 flex flex-col items-start gap-4">
            <p className="uppercase text-white text-sm">summer sale</p>
            <p className="uppercase text-5xl text-white">
              <span className="text-orange-400 font-semibold">37%</span> off
            </p>
            <p className="text-sm text-gray">
              Free on all your order, Free Shipping and 30 days <br />{" "}
              money-back guarantee.
            </p>
            <button className="text-white text-sm py-2 px-8 bg-green-500 flex items-center gap-1 rounded-full">
              Shop Now <GoArrowRight />
            </button>
          </div>
        </div>
        <ProductsDisplay
          productsToShow={featuredProductsToShow}
          products={products}
          title="Featured Products"
        />
      </div>
      {quickViewProduct && <QuickView {...quickViewProduct} />}
      <div className="px-20 py-10 flex items-center justify-between">
        <img
          src="src\Assets\steps.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8" />
        <img
          src="src\Assets\mango-vector.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8" />
        <img
          src="src\Assets\food-network.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8" />
        <img
          src="src\Assets\food-logo.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8" />
        <img
          src="src\Assets\book-off.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8" />
        <img
          src="src\Assets\g-series.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
      </div>
      <div className="px-20">
        <p className="font-poppins text-2xl font-semibold text-center my-4">
          Follow us on Instagram
        </p>
        <div className="insta-gallery grid grid-cols-6 gap-4">
          <div className="insta-post bg-[url(src/Assets/insta-post-1.png)] rounded-2xl">
            <a href="https://www.instagram.com/" className="layer hidden w-full h-full rounded-2xl">
              <FaInstagram className="text-2xl text-white"/>
            </a>
          </div>
          <div className="insta-post bg-[url(src/Assets/insta-post-2.png)] rounded-2xl">
            <a href="https://www.instagram.com/" className="layer hidden w-full h-full rounded-2xl">
              <FaInstagram className="text-2xl text-white"/>
            </a>
          </div>
          <div className="insta-post bg-[url(src/Assets/insta-post-3.png)] rounded-2xl">
            <a href="https://www.instagram.com/" className="layer hidden w-full h-full rounded-2xl">
              <FaInstagram className="text-2xl text-white"/>
            </a>
          </div>
          <div className="insta-post bg-[url(src/Assets/insta-post-4.png)] rounded-2xl">
            <a href="https://www.instagram.com/" className="layer hidden w-full h-full rounded-2xl">
              <FaInstagram className="text-2xl text-white"/>
            </a>
          </div>
          <div className="insta-post bg-[url(src/Assets/insta-post-5.png)] rounded-2xl">
            <a href="https://www.instagram.com/" className="layer hidden w-full h-full rounded-2xl">
              <FaInstagram className="text-2xl text-white"/>
            </a>
          </div>
          <div className="insta-post bg-[url(src/Assets/insta-post-6.png)] rounded-2xl">
            <a href="https://www.instagram.com/" className="layer hidden w-full h-full rounded-2xl">
              <FaInstagram className="text-2xl text-white"/>
            </a>
          </div>
          
         
        </div>
      </div>
    </>
  );
}
