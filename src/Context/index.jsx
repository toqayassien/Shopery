import { createContext, useState } from "react";

export const UserContext = createContext();

export default function MainContext({ children }) {
  let [jwt, setJwt] = useState(null);
  let [quickViewProduct, setQuickViewProduct] = useState(null);
  let [cartTotal, setCartTotal] = useState(0)
  const [cart, setCart] = useState(null);
  let username;

  return (
    <>
      <UserContext.Provider value={{cart, setCart, jwt, setJwt, quickViewProduct, setQuickViewProduct, cartTotal, setCartTotal, username }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
