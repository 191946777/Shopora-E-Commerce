import React, { createContext, useState } from "react";

export let cartContext = createContext();

const CartContext = (props) => {

  const [cart,setCart] = useState([])

  return (
    <>
      <cartContext.Provider value={[cart, setCart]}>
        {props.children}
      </cartContext.Provider>
    </>
  );
};

export default CartContext;
