import { createContext, useState } from "react";

export const UserContext = createContext();

export default function MainContext({ children }) {
  let [jwt, setJwt] = useState(null);
  let [quickViewProduct, setQuickViewProduct] = useState(null);
  let [cartTotal, setCartTotal] = useState(0)
  let [user, setUser] = useState([{
    "username" : "NA"
  }])
  const [cart, setCart] = useState(null);

  return (
    <>
      <UserContext.Provider value={{user, setUser, cart, setCart, jwt, setJwt, quickViewProduct, setQuickViewProduct, cartTotal, setCartTotal }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
