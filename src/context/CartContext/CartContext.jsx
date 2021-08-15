import firebase from "firebase/app";
import React, { useEffect, useState } from "react";
import { updateStock } from "../../firebase/client";
import { showTimerMessage } from "../../utilidades/helper";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
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
      for (var i in cart) {
        if (cart[i].product.id === obj.id) {
          if (update) cart[i].qty = qty;
          else if (cart[i].qty + qty <= cart[i].product.stock) {
            cart[i].qty += qty;
            showTimerMessage(
              `😎 El producto ya estaba en el carrito. La cantidad del mismo ha sido actualizada.`,
              "info"
            );
          } else {
            showTimerMessage(
              `😱 El stock disponible es ${
                cart[i].product.stock - cart[i].qty
              }. Ingresá una cantidad menor.`,
              "error"
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
    setCart([]);
    setCartSize(0);
    setCartTotal(0);
  }

  const createOrder = (email, name, phone) => {
    const order = {
      buyer: { email: email, name: name, phone: phone },
      detail: cart.map((element) => ({
        idProduct: element.product.id,
        title: element.product.title,
        qty: element.qty,
      })),
      ts_created: firebase.firestore.Timestamp.fromDate(new Date()),
      totalItems: cartSize,
      total: cartTotal,
    };
    updateStock(order).then((response) => {
      if (response === "ok") clear();
    });
  };

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
    else {
      updateCart(JSON.parse(localCart));
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, cartSize, cartTotal]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartSize,
        cartTotal,
        addItem,
        removeItem,
        clear,
        createOrder,
      }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
};