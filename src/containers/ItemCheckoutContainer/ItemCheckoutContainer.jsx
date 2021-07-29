import { useContext } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { ItemListCheckout } from "../../components/ItemListCheckout/ItemListCheckout";
import { ButtonComponent } from "../../components/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accounting from "accounting";
import { CartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import "./styles.scss";

export const ItemCheckoutContainer = () => {
  const { clear, cart, cartTotal, cartSize } = useContext(CartContext);
  return (
    <Container>
      <h2 className="mb-3">Carrito de compras</h2>
      <Row>
        <Col md={8}>
          {cartSize > 0 ? (
            <ItemListCheckout data={cart} />
          ) : (
            [
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
            ]
          )}
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
              <Row noGutters>
                <Col lg={8} className="pt-0 px-3 pb-0 pb-lg-3">
                  <ButtonComponent
                    text="Confirmar"
                    style={{ height: "100%" }}
                    variant="success"
                    icon={
                      <FontAwesomeIcon
                        icon={"cart-plus"}
                        title="Confirmar carrito"
                      />
                    }
                    onClick={() => {}}
                    block={true}
                  ></ButtonComponent>
                </Col>
                <Col lg={4} className="py-3 pt-lg-0 px-3 pl-lg-0">
                  <ButtonComponent
                    text="Vaciar"
                    variant="danger"
                    icon={
                      <FontAwesomeIcon
                        icon={"cart-arrow-down"}
                        title="Vaciar carrito"
                      />
                    }
                    onClick={clear}
                    block={true}
                  ></ButtonComponent>
                </Col>
              </Row>
            ) : (
              " "
            )}
          </div>
        </Col>
      </Row>{" "}
    </Container>
  );
};
