import { DATA } from "../../utilidades/const";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container, Spinner } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ greeting, onAddToCart }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const getItems = async () => {
      let p;
      if (products.length === 0) {
        const response = await fetch(`${DATA}`);
        let aux = await response.json();
        p = aux;
        setProducts(aux);
      }
      p = products.find((p) => p.id === parseInt(id));
      setTimeout(() => {
        setProduct(p);
        setLoaded(true);
      }, 300);
    };
    getItems();
  }, [id, products]);

  return (
    <Container>
      <h2 className="mb-3">{greeting}</h2>

      {loaded ? (
        !product ? (
          <Alert variant="danger" align="left" className={"mt-3"}>
            Producto no encontrado.{" "}
          </Alert>
        ) : (
          <ItemDetail product={product} onAddToCart={onAddToCart} />
        )
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner align="center" animation="border" variant="info" />
        </div>
      )}
    </Container>
  );
};
