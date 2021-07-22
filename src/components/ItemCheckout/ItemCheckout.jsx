import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accounting from "accounting";

export const ItemCheckout = ({ product }) => {
  return (
    <Card text="white" className="mb-2 p-4">
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
      <Card.Body>
        <Row>
          <Col>
            <Card.Text>{product.title}</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="flex-grow-1">
            <Card.Text>{accounting.formatMoney(product.price, "$")}</Card.Text>
          </Col>{" "}
          <Col xs={4} style={{ textAlign: "right" }}>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={"trash-alt"}
              className="ml-2"
              size="lg"
            />{" "}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
