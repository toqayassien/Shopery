import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleProduct from "../../Components/SingleProduct";
import QuickView from "../../Components/QuickView";
import { UserContext } from "../../Context";
import { Link } from "react-router";
import toast from "react-hot-toast";

export default function Cart() {
  // const [subTotal, setSubtotal] = useState(0)
  let subTotal = 0;
  let total = 0;
  let { cartTotal, setCartTotal } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  const [cartItems, setCartItems] = useState();
  const { quickViewProduct, setQuickViewProduct } = useContext(UserContext);
  const { cart, setCart } = useContext(UserContext);

  async function handleTotal(documentId, subTotal) {
    const total = await axios.put(
      `http://localhost:1337/api/carts/${cart.documentId}`,
      {
        data: {
          cartTotal: cartTotal,
        },
      },
    );
    const sub = await axios.put(
      `http://localhost:1337/api/cart-items/${documentId}`,
      {
        data: {
          subtotal: subTotal,
        },
      },
    );
  }

  async function handleQuantity(documentId, newQuantity, subTotal) {
    const response = await axios.put(
      `http://localhost:1337/api/cart-items/${documentId}`,
      {
        data: {
          quantity: newQuantity,
          subtotal: subTotal,
        },
      },
    );
    setCartItems((current) => {
      return current.map((item) => {
        return item.documentId === documentId
          ? { ...item, quantity: newQuantity, subtotal: subTotal }
          : { ...item, subtotal: subTotal };
      });
    });
  }
  async function getUser() {
    const response = await axios.get(
      `http://localhost:1337/api/users?populate=*&filters[username][$eq]=${user?.username}`,
    );
    setUser(response.data[0]);
    setCart(response.data[0].cart);
  }
  async function getCart() {
    console.log(user);
    const response = await axios.get(
      `http://localhost:1337/api/carts/${cart?.documentId}?populate[cart_items][populate][product][populate]=*`,
    );
    setCartItems(response.data.data.cart_items);
  }
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getCart();
  }, [user]);

  return (
    <>
      <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 py-10">
        <p className="font-semibold font-poppins text-2xl mb-6">
          My Shopping Cart
        </p>
        {cart ? (
          <div className="grid grid-cols-3 w-full items-start gap-4">
            <div className="col-span-2 border border-gray-300 rounded-lg">
              {/* <div className="grid grid-cols-5 grid-rows-4 p-2 px-4 border border-gray-50 rounded-lg bg-amber-200">
                <div className="col-span-2">
                    <p className="font-poppins text-gray uppercase">Product</p>
                </div>
                <div className="col-span-1">
                    <p className="font-poppins text-gray uppercase">Price</p>
                </div>
                <div className="col-span-1">
                    <p className="font-poppins text-gray uppercase">Quantity</p>
                </div>
                <div className="col-span-1">
                    <p className="font-poppins text-gray uppercase">Subtotal</p>
                </div>
            </div> */}
              <table className="text-left w-full">
                <thead className="text-gray font-poppins uppercase">
                  <tr className="border-b border-gray-200">
                    <th className="font-light p-2">Product</th>
                    <th className="font-light">price</th>
                    <th className="font-light">quantity</th>
                    <th className="font-light">subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => {
                    subTotal = item.product.price * item.quantity;
                    total += subTotal;
                    setCartTotal(total);
                    handleTotal(item.documentId, subTotal);
                    return (
                      <tr className="font-poppins border-b border-gray-200">
                        <td className="flex items-center gap-2 p-2">
                          <img
                            src={`http://localhost:1337${item.product.image.url}`}
                            alt=""
                            className="w-20"
                          />
                          {item.product.name}
                        </td>
                        <td>${item.product.price.toFixed(2)}</td>
                        <td>
                          <div className="flex items-center gap-3 border border-gray-200 p-2 rounded-full w-fit">
                            <button
                              className="px-2 bg-gray-200 rounded-full"
                              onClick={(e) => {
                                handleQuantity(
                                  item.documentId,
                                  item.quantity - 1,
                                  subTotal,
                                );
                              }}
                            >
                              -
                            </button>
                            <p className="text-sm">{item.quantity}</p>
                            <button
                              className="px-2 bg-gray-200 rounded-full"
                              onClick={(e) => {
                                handleQuantity(
                                  item.documentId,
                                  item.quantity + 1,
                                  subTotal,
                                );
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        {/* <td className="font-bold">${(item.quantity * item.product.price).toFixed(2)}</td> */}
                        <td className="font-bold">${subTotal.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="flex justify-between py-3 px-5 border-t border-gray-200">
                <Link
                  to="/shop"
                  className="bg-gray-200 text-gray-600 text-sm py-2 px-6 rounded-full font-semibold"
                >
                  Return to Shop
                </Link>
                <button
                  onClick={() => {
                    handleQuantity;
                    handleTotal;
                    toast.success("Cart Updated!");
                  }}
                  className="bg-gray-200 text-gray-600 text-sm py-2 px-6 rounded-full font-semibold"
                >
                  Update Cart
                </button>
              </div>
            </div>
            <div className="col-span-1 border border-gray-300 rounded-lg p-5 font-poppins">
              <p className="text-2xl">Cart Total</p>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <p className="text-gray-600">Subtotal: </p>
                <p className="font-semibold">${cartTotal}</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <p className="text-gray-600">Shipping: </p>
                <p className="font-semibold">Free</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="text-gray-600">Total: </p>
                <p className="font-semibold">${cartTotal}</p>
              </div>
              <div className="flex justify-center py-2">
                <button className="bg-green-600 text-white text-sm font-poppins px-10 py-2 rounded-full w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Your Cart is Empty!</p>
        )}
      </div>
      {/* <h1>
        {cart?.map((item) => {
          return (
            <SingleProduct
              slug={item.product.slug}
              name={item.product.name}
              src={item.product.image.url}
              price={item.product.price}
              sale={item.product.sale}
              oldPrice={item.product.oldPrice}
              category={item.product.category}
            />
          );
          // console.log(product)
        })}
      </h1> */}
      {quickViewProduct && <QuickView {...quickViewProduct} />}
    </>
  );
}
