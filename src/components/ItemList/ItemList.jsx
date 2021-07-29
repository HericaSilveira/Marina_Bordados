import { Row, Col } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ data }) => {
  return (
    <Row>
      {data.map((product) => (
        <Col key={product.id} sm={4}>
          <Item product={product} />
        </Col>
      ))}
    </Row>
  );
};
