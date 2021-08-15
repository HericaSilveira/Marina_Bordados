import { useContext, useEffect, useState } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { ItemListCheckout } from "../../components/ItemListCheckout/ItemListCheckout";
import { ButtonComponent } from "../../components/Buttons/Button";
import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accounting from "accounting";
import { CartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import "./styles.scss";

export const ItemCheckoutContainer = () => {
  const { clear, cart, cartTotal, cartSize } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col md={8}>
            <div className="checkout p-4">
              <h2 className="carrito mb-4">Carrito de compras</h2>
              {cartSize > 0
                ? [
                    <ItemListCheckout key={0} data={cart} />,
                    <Row key={1} className="mt-3">
                      <Col align="right">
                        <ButtonComponent
                          key={0}
                          text="Vaciar carrito"
                          variant="danger"
                          icon={
                            <FontAwesomeIcon
                              icon={"cart-arrow-down"}
                              title="Vaciar carrito"
                            />
                          }
                          onClick={clear}
                        ></ButtonComponent>
                      </Col>
                    </Row>,
                  ]
                : [
                    <Alert key={1} variant="warning" className={"d-block"}>
                      No tenés productos agregados al carrito.
                    </Alert>,
                    <Link key={2} to={"/"} style={{ textDecoration: "none" }}>
                      <ButtonComponent
                        text={`Ir de compras`}
                        variant="info"
                        icon={
                          <FontAwesomeIcon
                            icon={"shopping-cart"}
                            title="Ir de compras"
                          />
                        }
                        block={true}
                      />
                    </Link>,
                  ]}
            </div>
          </Col>
          <Col md={4}>
            <div className="checkout mt-2 mt-md-0">
              <Row noGutters>
                <Col className="p-3">
                  <h4>Ítems: {cartSize}</h4>
                  <h5>Total: {accounting.formatMoney(cartTotal, "$")}</h5>
                </Col>
              </Row>
              {cartSize > 0 ? (
                <Row className="m-0 mb-3">
                  <Col lg={12}>
                    <CheckoutForm />
                  </Col>
                </Row>
              ) : (
                " "
              )}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};