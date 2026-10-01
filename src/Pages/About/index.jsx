import { LuLeaf } from "react-icons/lu";
import { PiHeadset, PiPackageLight } from "react-icons/pi";
import { TbSparkleHighlight, TbTruckDelivery } from "react-icons/tb";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import Testimonials from "../../Components/Testimonials";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      <div className="flex flex-col-reverse items-center justify-center gap-5  md:grid md:grid-cols-10 px-5 md:px-10 lg:px-20">
        <div className="md:col-span-4 lg:col-span-5">
          <p className="text-2xl md:text-3xl lg:text-5xl font-semibold font-poppins">
            100% Trusted Organic Food Store
          </p>
          <p className="text-sm text-gray-700 mt-5">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>
        <div className="md:col-span-6 lg:col-span-5">
          <img src="src/Assets/about-first.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 px-5 md:py-10 md:grid md:grid-cols-10">
        <div className="md:col-span-5">
          <img src="src/Assets/about-second.png" alt="" />
        </div>
        <div className="md:col-span-5">
          <p className="text-2xl md:text-3xl lg:text-5xl font-semibold font-poppins">
            100% Trusted Organic Food Store
          </p>
          <p className="text-gray-700 mt-5 text-sm">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
          <div className="flex flex-col justify-center md:grid md:grid-cols-2 md:items-center py-4 gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-green-200 text-green-500 p-2 rounded-full text-lg">
                <LuLeaf />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">100% Organic Food</h3>
                <p className="text-xs text-gray">100% healthy & fresh food.</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-green-200 text-green-500 p-2 rounded-full text-lg">
                <PiHeadset />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">Great Support 24/7</h3>
                <p className="text-xs text-gray">Instant access to contact</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-green-200 text-green-500 p-2 rounded-full text-lg">
                <TbSparkleHighlight />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">Customer Feedback</h3>
                <p className="text-xs text-gray">Our happy customer</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-green-200 text-green-500 p-2 rounded-full text-lg">
                <LiaShoppingBagSolid />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">100% Secure Payment</h3>
                <p className="text-xs text-gray">
                  we ensure your money is safe
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-green-200 text-green-500 p-2 rounded-full text-lg">
                <TbTruckDelivery />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">Free Shipping</h3>
                <p className="text-xs text-gray">Free shipping with discount</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-green-200 text-green-500 p-2 rounded-full text-lg">
                <PiPackageLight />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">100% Organic Food</h3>
                <p className="text-xs text-gray">100% healthy & fresh food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-10 gap-5 pt-10 px-5 lg:px-20">
        <div className="flex flex-col gap md:col-span-5">
          <p className="text-2xl md:text-3xl lg:text-5xl font-semibold font-poppins">
            We Delivered, You Enjoy Your Order.
          </p>
          <p className="text-gray-700 mt-5 text-sm">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          <div className="flex flex-col gap-3 py-3">
            <div className="flex gap-2 items-center">
              <div className="bg-green-100 text-green-700 p-1 rounded-full text-sm">
                <FaCheck />
              </div>
              <p className="text-gray">Sed in metus pellentesque.</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-green-100 text-green-700 p-1 rounded-full text-sm ">
                <FaCheck />
              </div>
              <p className="text-gray">
                Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-green-100 text-green-700 p-1 rounded-full text-sm ">
                <FaCheck />
              </div>
              <p className="text-gray">
                Maecenas ut nunc fringilla erat varius.
              </p>
            </div>
          </div>
          <button className="bg-green-600 text-white font-semibold w-fit text-xs px-3 py-2 rounded-full flex gap-2 items-center lg:text-md lg:px-4 lg:py-2">
            Shop Now <GoArrowRight />
          </button>
        </div>
        <div className="md:col-span-5">
          <img src="src/Assets/about-third.png" alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-4 justify-center py-5 bg-gray-100">
        <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Our Awesome Team
        </p>
        <p className="text-gray text-sm text-center">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 px-5 lg:px-20 gap-5 mt-5h-50 ">
          <div className="h-50 md:h-70 flex flex-col bg-white shadow-lg rounded-lg">
            <div className="bg-[url('src/Assets/jenny.jpg')] bg-cover bg-center grow rounded-t-lg flex justify-center items-center group">
                <div className="hidden group-hover:flex hover:bg-gray-600/50 items-center gap-2 w-full h-full justify-center">
                  <a
                    href="https://www.facebook.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="https://x.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaTwitter className="text-sm" />
                  </a>
                  <a
                    href="https://uk.pinterest.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaPinterestP className="text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold">Jenny Wilson</p>
              <p className="text-xs text-gray">Ceo & Founder</p>
            </div>
          </div>
          <div className="h-50 md:h-70 flex flex-col bg-white shadow-lg rounded-lg">
            <div className="bg-[url('src/Assets/jane.png')] bg-cover bg-center grow rounded-t-lg flex justify-center items-center group">
                <div className="hidden group-hover:flex hover:bg-gray-600/50 items-center gap-2 w-full h-full justify-center">
                  <a
                    href="https://www.facebook.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="https://x.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaTwitter className="text-sm" />
                  </a>
                  <a
                    href="https://uk.pinterest.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaPinterestP className="text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold">Jane Cooper</p>
              <p className="text-xs text-gray">Worker</p>
            </div>
          </div>
          <div className="h-50 md:h-70 flex flex-col bg-white shadow-lg rounded-lg">
            <div className="bg-[url('src/Assets/cody.png')] bg-cover bg-center grow rounded-t-lg flex justify-center items-center group">
                <div className="hidden group-hover:flex hover:bg-gray-600/50 items-center gap-2 w-full h-full justify-center">
                  <a
                    href="https://www.facebook.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="https://x.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaTwitter className="text-sm" />
                  </a>
                  <a
                    href="https://uk.pinterest.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaPinterestP className="text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold">Cody Fisher</p>
              <p className="text-xs text-gray">Security Guard</p>
            </div>
          </div>
          <div className="h-50 md:h-70 flex flex-col bg-white shadow-lg rounded-lg">
            <div className="bg-[url('src/Assets/robert.png')] bg-cover bg-center grow rounded-t-lg flex justify-center items-center group">
                <div className="hidden group-hover:flex hover:bg-gray-600/50 items-center gap-2 w-full h-full justify-center">
                  <a
                    href="https://www.facebook.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="https://x.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaTwitter className="text-sm" />
                  </a>
                  <a
                    href="https://uk.pinterest.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaPinterestP className="text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="p-2 rounded-full text-white hover:bg-green-500"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold">Robert Fox</p>
              <p className="text-xs text-gray">Farmer Manager</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>
      <div className="h-100 py-10 md:h-30 w-full px-5 lg:px-20 md:py-10 grid grid-cols-2 md:flex gap-20 md:gap-4 items-center justify-center md:justify-between">
        <img
          src="src\Assets\steps.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8 hidden md:block" />
        <img
          src="src\Assets\mango-vector.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8 hidden md:block" />
        <img
          src="src\Assets\food-network.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8 hidden md:block" />
        <img
          src="src\Assets\food-logo.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8 hidden md:block" />
        <img
          src="src\Assets\book-off.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
        <span className="bg-gray-200 w-px h-8 hidden md:block" />
        <img
          src="src\Assets\g-series.png"
          alt=""
          className="grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
}
