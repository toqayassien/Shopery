import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

export default function Newsletter() {
  const emailValue = useRef();
  async function newsLetterSubmit(e) {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:1337/api/newsletters", {
        data: {
          email: emailValue.current.value,
        },
      });
      toast.success("Thanks for joining our Newsletter!");
    } catch (err) {
      toast.error("Email wrong or already subscribed");
      console.log(err);
    }
  }
  return (
    <div className="bg-gray-100 grid grid-cols-12 items-center justify-center px-5 md:px-10 lg:px-20 py-10 gap-4">
      <div className="text-center md:text-left col-span-12 md:col-span-4 gap-2">
        <p className="text-md lg:text-xl font-semibold font-poppins">
          Subscribe to our Newsletter
        </p>
        <p className="text-gray text-[10px] lg:text-xs font-poppins font-extralight">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-center items-center">
        <form
          className="bg-white rounded-full flex justify-between"
          onSubmit={newsLetterSubmit}
        >
          <input type="email" ref={emailValue} className="outline-0 pl-2 pr-5 lg:pl-5 lg:pr-20 text-xs lg:text-sm" placeholder="Your Email Address" />
          <button
            type="submit"
            className="bg-green-600 px-6 py-2 rounded-full text-xs md:text-sm text-white font-poppins cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="col-span-12 md:col-span-2 flex items-center justify-center gap-2">
        <a href="https://www.facebook.com/" className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500">
          <FaFacebookF className="text-sm" />
        </a>
        <a href="https://x.com/" className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500">
          <FaTwitter className="text-sm" />
        </a>
        <a href="https://uk.pinterest.com/" className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500">
          <FaPinterestP className="text-sm" />
        </a>
        <a href="https://www.instagram.com/" className="p-2 rounded-full text-gray-700 hover:text-white hover:bg-green-500">
          <FaInstagram className="text-sm"/>
        </a>
      </div>
    </div>
  );
}
