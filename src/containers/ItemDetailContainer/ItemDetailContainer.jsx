import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { Loader } from "../../components/Loader/Loader";
import { getProductById } from "../../firebase/client";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const waitForData = async (id) => {
      setProduct(id ? await getProductById(id) : null);
      setLoading(false);
    };
    waitForData(id);
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        [
          <h2 key={0} className="mb-3">
            Detalle del producto:
          </h2>,
          !product ? (
            <Alert key={1} variant="danger" align="left" className={"mt-3"}>
              Producto no encontrado.{" "}
            </Alert>
          ) : (
            <ItemDetail key={1} product={product} />
          ),
        ]
      )}
    </Container>
  );
};
