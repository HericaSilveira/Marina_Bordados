import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { CartContext } from "../../context/CartContext/CartContext";

export const ItemDetailContainer = () => {
  const { products } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let p = products.find((p) => p.id === parseInt(id));
    setProduct(p);
  }, [id, products]);

  return (
    <Container>
      <h2 className="mb-3">Detalle del producto: #{id}</h2>
      {!product ? (
        <Alert variant="danger" align="left" className={"mt-3"}>
          Producto no encontrado.{" "}
        </Alert>
      ) : (
        <ItemDetail product={product} />
      )}
    </Container>
  );
};
