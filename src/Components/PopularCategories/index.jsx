import { GoArrowRight } from "react-icons/go";
import SingleCategory from "../SingleCategory";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

export default function PopularCategories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const response = await axios.get(
      "http://localhost:1337/api/categories?populate=*",
    );
    const output = response.data.data;
    const uniqueCategories = [...output.map((item) => item)];
    setCategories(uniqueCategories);
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="px-20 flex flex-col gap-4 mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-poppins">Popular Categories</h2>
        <Link to={'./shop'} className="flex items-center gap-1 text-green-500 font-semibold text-sm cursor-pointer">
          View All <GoArrowRight />
        </Link>
      </div>
      <div className="grid grid-rows-2 grid-cols-6 gap-4">
        {categories.map((category) => (
          <SingleCategory
            name={category.name}
            pic={category.image.url}
            slug={category.slug}
          />
        ))}
        {/* <SingleCategory name="Fresh Fruit" pic="fruits.png" />
        <SingleCategory name="Fresh Vegetables" pic="veggies.png" />
        <SingleCategory name="Meat & Fish" pic="poultry.png" />
        <SingleCategory name="Snacks" pic="snacks.png" />
        <SingleCategory name="Beverages" pic="drinks.png" />
        <SingleCategory name="Beauty & Health" pic="health.png" />
        <SingleCategory name="Bread & Bakery" pic="bread.png" />
        <SingleCategory name="Baking Needs" pic="baking.png" />
        <SingleCategory name="Cooking" pic="cooking.png" />
        <SingleCategory name="Diabetic Food" pic="diabetic.png" />
        <SingleCategory name="Dish Detergents" pic="detergents.png" />
        <SingleCategory name="Oil" pic="oil.png" /> */}
      </div>
    </div>
  );
}
