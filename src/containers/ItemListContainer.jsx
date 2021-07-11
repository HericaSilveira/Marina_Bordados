import { useEffect, useState } from "react";
import { getProductsMeLi } from "../utilidades/const";
import { Alert, Row, Col } from "react-bootstrap";
import { ItemList } from "../components/ItemList/ItemList";
import { ButtonComponent } from "../components/Buttons/Button";
import { products } from "./products";

export const ItemListContainer = ({ greeting, onAdd }) => {
  const [productos, setProductos] = useState([]);
  const [alert, setAlert] = useState(false);
  const [searchMeli, setSearchMeli] = useState(false);
  const [searchLocal, setSearchLocal] = useState(false);

  useEffect(() => {
    if (searchMeli) {
      setProductos([]);
      setAlert(true);
      setSearchMeli(false);
      const waitForData = async () => {
        let data = await getProductsMeLi("zapatillas");
        let aux = data.map((element) => {
          return {
            title: element.title,
            img: element.thumbnail,
            price: element.price,
            stock: element.available_quantity,
            category: element.domain_id,
          };
        });
        setProductos(aux);
      };
      waitForData();
    }
    if (searchLocal) {
      setProductos([]);
      setAlert(true);
      setSearchLocal(false);
      simulateNetworkRequest().then(() => {
        setProductos(products);
      });
    }
  }, [productos, searchLocal, searchMeli, alert]);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const handleClickMeli = () => setSearchMeli(true);
  const handleClickLocal = () => setSearchLocal(true);

  return (
    <>
      <h2 className="mb-3" text="center">
        {greeting}
      </h2>
      <Row>
        <Col lg={6}>
          <ButtonComponent
            text={`Traer productos de Mercado Libre`}
            variant="info"
            onClick={handleClickMeli}
            block={true}
          />
        </Col>
        <Col lg={6}>
          <ButtonComponent
            text="Traer productos local"
            variant="info"
            onClick={handleClickLocal}
            block={true}
          />
        </Col>
      </Row>

      <Alert variant="info" className={alert ? "d-block mt-3" : "d-none"}>
        {productos.length === 0
          ? "Cargando"
          : "Listo, se obtuvieron los productos."}
      </Alert>

      <Row className="mt-3">
        <Col>
          {productos.length > 0 ? (
            <ItemList data={productos} onAdd={onAdd} />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </>
  );
};
