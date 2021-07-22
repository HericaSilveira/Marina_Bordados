import { Row, Col } from "react-bootstrap";
import { ItemCheckout } from "../ItemCheckout/ItemCheckout";

export const ItemListCheckout = ({ data }) => {
  return (
    <Row>
      {data.map((product) => (
        <Col key={product.id} lg={4}>
          <ItemCheckout product={product} />
        </Col>
      ))}
    </Row>
  );
};
