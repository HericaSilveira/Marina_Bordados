import { Card, Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import accounting from "accounting";
import "./styles.scss";

export const Item = ({ product }) => {
  return (
    <Link
      to={`/item/${product.id}`}
      style={{ color: "#fff", textDecoration: "none" }}
    >
      <Card key={product.id} text="white" className="mb-2 p-4">
        <Card.Header>
          <Row>
            <Card.Img
              className="mt-1"
              variant="top"
              src={product.img}
              alt={product.title}
              title={product.title}
            />
          </Row>
        </Card.Header>
        <Card.Body className="pt-2">
          <Row className="align-items-end">
            <Col>
              <Card.Text>{product.title}</Card.Text>
              <Card.Text>
                {accounting.formatMoney(product.price, "$")}
              </Card.Text>
            </Col>
            <Col align="right">
              {product.stock === 0 ? (
                <Badge className="outOfStock" variant="dark">
                  Sin stock
                </Badge>
              ) : (
                <Badge className="outOfStock" variant="light">
                  Stock: {product.stock}{" "}
                </Badge>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
};
