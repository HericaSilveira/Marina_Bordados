import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import "./styles.scss";
import { ItemList } from "../../components/ItemList/ItemList";

export const ItemListContainer = ({ greeting, onAdd }) => {
  const [products, setProducts] = useState([]);
  // const [alert, setAlert] = useState(false);
  // const [searchMeli, setSearchMeli] = useState(false);
  // const [searchLocal, setSearchLocal] = useState(false);

  // useEffect(() => {
  //   if (searchMeli) {
  //     setProducts([]);
  //     setAlert(true);
  //     setSearchMeli(false);
  //     const waitForData = async () => {
  //       let data = await getProductsMeLi("zapatillas");
  //       let aux = data.map((element) => {
  //         return {
  //           title: element.title,
  //           img: element.thumbnail,
  //           price: element.price,
  //           stock: element.available_quantity,
  //           category: element.domain_id,
  //         };
  //       });
  //       setProducts(aux);
  //     };
  //     waitForData();
  //   }
  //   if (searchLocal) {
  //     setProducts([]);
  //     setAlert(true);
  //     setSearchLocal(false);
  //     const getItems = async () => {
  //       const response = await fetch("./assets/products.json");
  //       let products = await response.json();
  //       setTimeout(() => {
  //         setProducts(products);
  //       }, 2000);
  //     };
  //     getItems();
  //   }
  // }, [products, searchLocal, searchMeli, alert]);

  // const handleClickMeli = () => setSearchMeli(true);
  // const handleClickLocal = () => setSearchLocal(true);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("./assets/products.json");
      let products = await response.json();
      setTimeout(() => {
        setProducts(products);
      }, 2000);
    };
    getItems();
  }, [products]);

  return (
    <>
      <h2 className="mb-3" text="center">
        {greeting}
      </h2>
      
      {/* <Row>
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
      </Row> */}

      <Alert variant="info" className={alert ? "d-block mt-3" : "d-none"}>
        {products.length === 0
          ? "Cargando"
          : "Listo, se obtuvieron los productos."}
      </Alert>

      {products.length > 0 ? <ItemList data={products} /> : ""}
    </>
  );
};
