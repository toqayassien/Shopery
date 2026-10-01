import { Link } from "react-router";

export default function SingleCategory({ name, pic, slug }) {
  return (
    <Link to={`/shop/categories/${slug}`}>
      <div className="w-fit py-4 px-2 flex flex-col gap-2 items-center border-2 border-gray-100 rounded hover:shadow-sm hover:shadow-green-500 hover:border hover:border-black">
        <img src={`http://localhost:1337${pic}`} alt="" className="w-40" />
        <p className="font-semibold text-poppins text-sm">{name}</p>
      </div>
    </Link>
  );
}
