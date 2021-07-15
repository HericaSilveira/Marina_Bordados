import { Row, Col } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ data, onAdd }) => {
  let large = data.length < 3 ? 6 : 4;
  return (
    <Row>
      {data.map((product) => (
        <Col key={product.id} lg={large}>
          <Item product={product} onAdd={onAdd} />
        </Col>
      ))}
    </Row>
  );
};
