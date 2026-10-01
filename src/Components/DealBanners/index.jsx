import "./index.css";
import { GoArrowRight } from "react-icons/go";

export default function DealBanners() {
  return (
    <div className="px-20 grid grid-cols-3 gap-15 my-10 mx-auto h-100">
      <div className="p-8 best-deals flex flex-col gap-4 justify-start items-center">
        <p className="uppercase font-poppins text-white text-xs">Best deals</p>
        <p className="font-poppins text-3xl text-white font-bold">
          Sale Of The Month
        </p>
        <img src="src\Assets\timer.png" alt="" className="px-3"/>
        <button className="flex items-center text-xs gap-2 text-green-500 font-bold bg-white rounded-full py-2 px-5">
          Shop Now <GoArrowRight />
        </button>
      </div>
      <div className="p-8 meat-deals flex flex-col gap-4 justify-start items-center">
        <p className="uppercase font-poppins text-white text-xs">85% fat free</p>
        <p className="font-poppins text-3xl text-white font-bold">
          Low-Fat Meat
        </p>
        <p className="text-white">Starting from <span className="text-orange-400">$79.99</span></p>
        <button className="flex items-center text-xs gap-2 text-green-500 font-bold bg-white rounded-full py-2 px-5">
          Shop Now <GoArrowRight />
        </button>
      </div>
      <div className="p-8 fruit-deals flex flex-col gap-4 justify-start items-center">
        <p className="uppercase font-poppins text-xs">summer sale</p>
        <p className="font-poppins text-3xl font-bold">
          100% fresh fruit
        </p>
        <p>Up to <span className="bg-black font-semibold text-yellow-300 px-2 py-1 text-xs rounded">64% OFF</span></p>
        <button className="flex items-center text-xs gap-2 text-green-500 font-bold bg-white rounded-full py-2 px-5">
          Shop Now <GoArrowRight />
        </button>
      </div>
      
    </div>
  );
}
