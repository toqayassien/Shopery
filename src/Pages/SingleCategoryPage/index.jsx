import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleCategory from "../../Components/SingleCategory";
import Loader from "../../Components/Loader";
import SingleProduct from "../../Components/SingleProduct";

export default function SingleCategoryPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [loader, setLoader] = useState(true);

  async function getSingleCategory() {
    const response = await axios.get(
      `http://localhost:1337/api/categories?filters[slug][$eq]=${slug}&populate[products][populate]=*`,
    );
    setCategory(response.data.data[0]);
    setLoader(false)
  }
  useEffect(()=>{
    console.log(category)
  },[category])
  useEffect(() => {
    getSingleCategory();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className="px-20 py-10 h-fit grid grid-cols-3">
    {category.products.map((product)=>{
        return <SingleProduct 
        name={product.name}
        src={product.image?.url}
        slug={product.slug}
        sale={product.sale}
        price={product.price}
        />
    })}
    </div>
  );
}
