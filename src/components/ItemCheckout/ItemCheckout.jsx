import { Container, Row, Col } from "react-bootstrap";
import accounting from "accounting";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import "./styles.scss";

export const ItemCheckout = ({ product, qty }) => {
  let remainingStock = product.stock - qty;
  return (
    <Container className="itemDetail mb-2">
      <Row noGutters>
        <Col className="p-2 px-lg-3" sm={2} md={3}>
          <img
            style={{ maxWidth: "100%" }}
            src={product.img}
            alt={product.title}
            title={product.title}
          />
        </Col>
        <Col className="px-1 px-sm-3 py-2" sm={10} md={9}>
          <Row>
            <Col>
              <h5 className="mb-0">{product.title}</h5>
              <p style={{ fontSize: 11 }}>
                {remainingStock === 0
                  ? "Sin stock extra disponible."
                  : remainingStock === 1
                  ? `Aún queda ${remainingStock} unidad disponible.`
                  : `Aún quedan ${remainingStock} unidades disponibles.`}
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={10} lg={6}>
              <ItemCounter product={product} initial={qty} checkout={true} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="mt-2" style={{ fontWeight: 300, fontSize: 14 }}>
                {accounting.formatMoney(product.price, "$")} x un.
              </h6>{" "}
              <h6 className="mt-1" style={{ fontSize: 17 }}>
                {accounting.formatMoney(product.price * qty, "$")} tot.
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
