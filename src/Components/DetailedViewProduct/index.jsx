import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function DetailedViewProduct({
  name,
  price,
  src,
  sale,
  category,
  slug
}) {
  return (
    <Link to={`/shop/products/${slug}`}>
      <div className="flex flex-col items-center w-full h-full justify-center gap-2 bg-white border-gray-200 border rounded hover:shadow-sm hover:shadow-green-500 hover:border hover:border-black">
        <img src={`http://localhost:1337${src}`} alt="" />
        <div className="flex gap-2 items-center">
          <div className="bg-gray-200 p-2 rounded-full">
            <GoHeart className="text-xs" />
          </div>
          <button className="grow bg-green-600 px-20 py-2 rounded-full text-white text-xs font-semibold">
            Add to cart
          </button>
          <div className="bg-gray-200 p-2 rounded-full">
            <IoEyeOutline className="text-xs" />
          </div>
        </div>
        <p className="text-green-500">{name}</p>
        <p className="font-semibold">${price.toFixed(2)}</p>
        <img src="src\Assets\rating.png" alt="" className="w-20" />
        <p className="text-gray text-xs">Hurry Up! Offer ends In:</p>
        <img src="src\Assets\Time.png" alt="" className="w-50" />
      </div>
    </Link>
  );
}
