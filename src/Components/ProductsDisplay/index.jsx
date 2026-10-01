import { GoArrowRight } from "react-icons/go";
import SingleProduct from "../SingleProduct";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ProductDisplay({ title, productsToShow, products}) {
  const count = productsToShow;
  return (
    <div className="px-20 flex flex-col gap-4 mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-poppins">{title}</h2>
        <Link to={'./shop'} className="flex items-center gap-1 text-green-500 font-semibold text-sm cursor-pointer">
          View All <GoArrowRight />
        </Link>
      </div>
      <div className="products grid grid-cols-5 grid-rows-2 gap-0">
        {products.slice(0,count).map((product, index) => {
          return (
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
