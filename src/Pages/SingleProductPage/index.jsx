import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../Components/Loader";
import ViewFullProduct from "../../Components/ViewFullProduct";

export default function SingleProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(true);

  async function getProduct() {
    const response = await axios.get(
      `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`,
    );
    setProduct(response.data.data[0]);
    setLoader(false);
  }
  useEffect(() => {
    getProduct();
  }, []);

  // useEffect(()=>{
  //   if(product){
  //     console.log(product)
  //   }
  // },[product])
  return loader ? (
    <Loader />
  ) : (
    <ViewFullProduct
      name={product.name}
      src={product.image.url}
      price={product.price}
      sale={product.sale}
      category={product.category}
    />
  );
}
