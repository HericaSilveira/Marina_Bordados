import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Row, Col, Badge, Dropdown } from "react-bootstrap";
import { CartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../Buttons/Button";

import "./styles.scss";

const badgeStyle = {
  verticalAlign: "top",
  marginLeft: -4,
  fontSize: "65%",
  opacity: "85%",
  paddingLeft: "0.5em",
  paddingRight: "0.5em",
  paddingTop: "0.2em",
};

export const CartWidget = () => {
  const { cart, cartSize } = useContext(CartContext);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          style={{ boxShadow: "none" }}
          id="dropgdown-basic"
        >
          <FontAwesomeIcon
            icon={"shopping-cart"}
            className="ml-2 fa"
            size="lg"
          />
          <Badge pill variant="light" style={badgeStyle}>
            {cartSize}
          </Badge>
          <span className="sr-only">Carrito de compras</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdownMenu">
          <Dropdown.Item>
          <strong>Carrito de compras</strong>
          </Dropdown.Item>
          {cartSize === 0 && <Dropdown.Item>Aún no tenés productos en tu carrito</Dropdown.Item>}
          {cartSize !== 0 && cart.map((element, index) => {
            return (
              <Dropdown.Item key={index}>
                <Row>
                  <Col>{element.product.title}</Col>
                  <Col align="center">{element.qty}</Col>
                </Row>
              </Dropdown.Item>
            );
          })}
          <Dropdown.Divider />
          <Dropdown.Item to={`/cart`} as={Link}>
            <ButtonComponent text="Ver carrito" variant="light" block={true} />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
