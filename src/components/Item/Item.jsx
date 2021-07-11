import { Card, Badge, Row, Col } from "react-bootstrap";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import "./styles.scss";

export const Item = ({ category, title, price, stock, img, onAdd }) => {
  return (
    <Card text="white" className="mb-2 p-3 col-4 align-items-stretch">
      <Card.Header>
        <Row>
          <Badge variant="success">{category}</Badge>
        </Row>
        <Row>
          <Card.Img
            className="mt-1"
            variant="top"
            src={img}
            alt={title}
            title={title}
          />
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Text>{title}</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>{(price, "$")}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <ItemCounter stock={stock} initial={1} onAdd={onAdd} />
      </Card.Footer>
    </Card>
  );
};
