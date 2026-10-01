import axios from "axios";
import SingleProduct from "../../Components/SingleProduct";
import { useContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { UserContext } from "../../Context";
import QuickView from "../../Components/QuickView";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const { quickViewProduct, setQuickViewProduct } = useContext(UserContext);


  async function getAllProducts() {
    const response = await axios.get(
      "http://localhost:1337/api/products?populate=*&pagination[pageSize]=200",
    );
    // const products = await response.json()
    setProducts(response.data.data);
    setLoader(false);
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(()=>{
  },[products])
  return loader ? (
    <Loader />
  ) : (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-5 md:px-10 lg:px-20 gap-2 h-fit">
      {products.map((product) => {
        return (
          <SingleProduct
          name={product.name}
          price={product.price}
          sale={product.sale}
          src={product.image.url}
          key={product.id}
          slug={product.slug}
          oldPrice={product.old_price}
          category={product.categories[0]?.name}
          />
        );
      })}
      </div>
      {
        quickViewProduct && <QuickView {...quickViewProduct} onClose={()=> console.log("closed")}/> 
      }
    </>
    )
  }
