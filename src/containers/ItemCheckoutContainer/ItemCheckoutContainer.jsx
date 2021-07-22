import { useState } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { ItemListCheckout } from "../../components/ItemListCheckout/ItemListCheckout";
import { ButtonComponent } from "../../components/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export const ItemCheckoutContainer = ({ greeting, cart }) => {
  const [products, setProducts] = useState([]);
  return (
    <Container>
      <h2 className="mb-3">
        {greeting}
      </h2>
      <Row>
        <Col lg={9} md={8}>
          {cart > 0 ? (
            <ItemListCheckout data={products} />
          ) : (
            <Alert variant="warning" className={"d-block mt-3"}>
              No tenés productos agregados al carrito
            </Alert>
          )}
        </Col>
        <Col lg={3} md={4}>
          <Row noGutters>
            <Col className="checkout mt-3 mt-md-0 mb-2 p-3">
              <h4>Total ítems: {cart}</h4>
              {cart > 0 ? (
                <ButtonComponent
                  text="Confirmar carrito"
                  variant="success"
                  icon={
                    <FontAwesomeIcon
                      icon={"cart-plus"}
                      title="Confirmar carrito"
                    />
                  }
                  onClick={() => {}}
                  block={true}
                />
              ) : (
                " "
              )}
            </Col>
          </Row>
        </Col>
      </Row>{" "}
    </Container>
  );
};
