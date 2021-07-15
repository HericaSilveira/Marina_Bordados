import { Card, Badge, Row, Col } from "react-bootstrap";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import accounting from "accounting";
import "./styles.scss";

export const Item = ({ product, onAdd }) => {
  return (
    <Card key={product.id} text="white" className="mb-2 p-3">
      <Card.Header>
        <Row>
          <Badge variant="success">{product.category}</Badge>
        </Row>
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
          <Col>
            <Card.Text>{accounting.formatMoney(product.price, "$")}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <ItemCounter stock={product.stock} initial={1} onAdd={onAdd} />
      </Card.Footer>
    </Card>
  );
};
