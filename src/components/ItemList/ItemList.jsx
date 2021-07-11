import { Row, Container } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ data, onAdd }) => {
  return (
    <Container>
      <Row>
        {data.map(({ category, title, price, img, stock }, index) => (
          <Item
            key={index}
            category={category}
            title={title}
            price={price}
            img={img}
            stock={stock}
            onAdd={onAdd}
          />
        ))}
      </Row>
    </Container>
  );
};
