import React, { useState } from "react";

export const CartContext = React.createContext([[], () => {}]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  function getFrom(id) {
    return cart.find((p) => p.product.id === id);
  }

  function isInCart(id) {
    return id === undefined ? undefined : getFrom(id) !== undefined;
  }

  function updateCart(cart_) {
    let total = 0,
      size = 0;
    cart_.forEach((element) => {
      size += element.qty;
      total += element.qty * element.product.price;
    });
    setCartSize(size);
    setCartTotal(total);
  }

  function addItem(obj, qty, update) {
    if (isInCart(obj.id)) {
      console.log(
        "Ya se encuentra el producto en el carrito. El mismo ha sido actualizado."
      );
      for (var i in cart) {
        if (cart[i].product.id === obj.id) {
          if (update) cart[i].qty = qty;
          else if (cart[i].product.qty + qty <= cart[i].product.stock) {
            cart[i].qty += qty;
          } else {
            console.log(
              `El stock del producto es ${cart[i].product.stock}. Ingresá una cantidad menor.`
            );
            return;
          }
          break;
        }
      }
      setCart(cart);
      updateCart(cart);
    } else {
      cart.push({
        product: obj,
        qty: qty,
      });
      setCart(cart);
      updateCart(cart);
    }
  }

  function removeItem(id) {
    let aux = cart.filter(function (obj) {
      return obj.product.id !== id;
    });
    updateCart(aux);
    setCart(aux);
  }

  function clear() {
    setCart(defaultValue);
    setCartSize(0);
    setCartTotal(0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartSize,
        cartTotal,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};