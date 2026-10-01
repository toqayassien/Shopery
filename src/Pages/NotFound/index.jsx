import { Link } from "react-router";
import Header from "../../Components/Header";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-20">
      <img src="./public/404.png" alt="" className="w-100" />
      <p className="text-4xl font-semibold">Oops! page not found</p>
      <p className="text-gray text-center text-sm">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. <br/> Maecenas
        sagittis tortor at metus mollis
      </p>
      <Link to="/" className="cursor-pointer py-2 px-6 mt-2 bg-green-600 font-semibold text-white rounded-full text-sm">Back to Home</Link>
    </div>
  );
}
