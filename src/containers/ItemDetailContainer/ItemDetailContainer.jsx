import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ greeting, onAdd }) => {
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("./assets/products.json");
      let products = await response.json();
      setTimeout(() => {
        setProduct(products[0]);
      }, 2000);
    };
    getItems();
  }, [product]);

  return (
    <>
      <h2>{greeting}</h2>

      <Alert variant="info" className={alert ? "d-block mt-3" : "d-none"}>
        {!product ? "Cargando" : "Listo, se obtuvo el producto."}
      </Alert>

      {product ? <ItemDetail product={product} onAdd={onAdd} /> : ""}
    </>
  );
};
