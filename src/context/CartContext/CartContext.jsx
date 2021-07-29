import { SHOW_TOAST } from "../../utilidades/const";
import React, { useEffect, useState } from "react";
import { DATA, CATEGORIES } from "../../utilidades/const";
import { Spinner } from "react-bootstrap";

export const CartContext = React.createContext([[], () => {}]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [msj, setMsj] = useState(null);
  const [error, setError] = useState(null);

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
            setMsj(
              "El producto ya estaba en el carrito. La cantidad del mismo ha sido actualizada."
            );
            hideMsj();
          } else {
            setError(
              `El stock disponible es ${
                cart[i].product.stock - cart[i].qty
              }. Ingresá una cantidad menor.`
            );
            hideMsj();
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

  function hideMsj() {
    setTimeout(() => {
      setMsj(null);
      setError(null);
    }, SHOW_TOAST + 100);
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

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
    else {
      updateCart(JSON.parse(localCart));
      setCart(JSON.parse(localCart));
    }

    const getCategories = async () => {
      const response = await fetch(`${CATEGORIES}`);
      let p = await response.json();
      setTimeout(() => {
        setCategories(p);
      }, 1000);
    };
    getCategories();
    const getProducts = async () => {
      const response = await fetch(`${DATA}`);
      let p = await response.json();
      setTimeout(() => {
        setProducts(p);
      }, 1000);
    };
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, cartSize, cartTotal]);

  return (
    <CartContext.Provider
      value={{
        products,
        categories,
        cart,
        cartSize,
        cartTotal,
        msj,
        error,
        addItem,
        removeItem,
        clear,
      }}
    >
      {products.length > 0 && categories.length > 0 ? (
        children
      ) : (
        <div className="mt-5 d-flex justify-content-center">
          <Spinner align="center" animation="border" variant="info" />
        </div>
      )}{" "}
    </CartContext.Provider>
  );
};
