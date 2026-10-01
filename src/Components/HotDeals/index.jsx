import { GoArrowRight } from "react-icons/go";
import DetailedViewProduct from "../DetailedViewProduct";
import SingleProduct from "../SingleProduct";
import { Link } from "react-router";

export default function HotDeals({ products }) {
  return (
    <div className="bg-gray-100 px-20 py-5">
      <div className="flex items-center justify-between py-5">
              <h2 className="text-2xl font-bold font-poppins">Hot Deals</h2>
              <Link to={'./shop'}  className="flex items-center gap-1 text-green-500 font-semibold text-sm cursor-pointer">
                View All <GoArrowRight />
              </Link >
            </div>
      <div className="grid grid-cols-5 auto-rows-max">
        {products.slice(0, 12).map((product, index) => {
          return index == 0 ? (
            <div className="col-span-2 row-span-2">
              {" "}
              <DetailedViewProduct
                name={product.name}
                price={product.price}
                src={product.image.url}
                slug={product.slug}
              />{" "}
            </div>
          ) : (
            <SingleProduct
              name={product.name}
              sale={product.sale}
              key={product.id}
              price={product.price}
              src={product.image.url}
              slug={product.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
