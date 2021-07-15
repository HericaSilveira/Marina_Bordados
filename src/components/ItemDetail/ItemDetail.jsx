import { Badge, Container, Row, Col } from "react-bootstrap";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import accounting from "accounting";
import "./styles.scss";

export const ItemDetail = ({ product, onAdd }) => {
  return (
    <Container className="itemDetail">
      <Row noGutters>
        <Col className="py-2 px-4" lg={4} md={6} sm={4}>
          <Row>
            <Col>
              <Badge variant="success">{product.category}</Badge>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="mt-1"
                style={{ maxWidth: "100%" }}
                src={product.img}
                alt={product.title}
                title={product.title}
              />
            </Col>
          </Row>
        </Col>
        <Col className="py-2 px-4" lg={8} md={6} sm={8}>
          <Row className="mt-4">
            <Col md={8}>
              <h3>{product.title}</h3>
            </Col>
            <Col className="text-md-right" md={4}>
              <h3>
                <Badge variant="light">
                  {accounting.formatMoney(product.price, "$")}
                </Badge>
              </h3>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>{product.description}</Col>
          </Row>{" "}
          <Row className="my-4">
            <Col lg={6} style={{ verticalAlign: "middle" }}>
              <p>Stock: {product.stock} unidades</p>
            </Col>
            <Col lg={6}>
              <ItemCounter stock={product.stock} initial={1} onAdd={onAdd} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
