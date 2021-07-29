import { useContext, useState } from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonComponent } from "../Buttons/Button";
import { CartContext } from "../../context/CartContext/CartContext";
import "./styles.scss";

export const ItemCounter = ({
  product,
  initial = 1,
  onAdd = null,
  checkout = false,
}) => {
  const [counter, setCounter] = useState(initial);
  const { cart, removeItem, addItem } = useContext(CartContext);
  let productInCart = cart.find((e) => e.product.id === product.id);
  let remainingStock = productInCart
    ? product.stock - productInCart.qty
    : product.stock;
  const remove = () => {
    removeItem(product.id);
  };
  const sumar = () => {
    if (checkout) {
      if (counter < product.stock) {
        addItem(product, counter + 1, true);
        setCounter(counter + 1);
      }
    } else {
      if (counter < remainingStock) setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (checkout) {
      if (counter > 1) {
        addItem(product, counter - 1, true);
        setCounter(counter - 1);
      }
    } else {
      if (counter > 1) setCounter(counter - 1);
    }
  };
  const manualChange = (e) => {
    let value = e.target.value;
    if (checkout) {
      if (value > 1 && value < remainingStock) {
        addItem(product, value, true);
        setCounter(value);
      } else {
        addItem(product, remainingStock, true);
        setCounter(remainingStock);
      }
    } else {
      if (value > 1 && value < remainingStock) setCounter(value);
      else setCounter(remainingStock);
    }
  };
  return (
    <Row noGutters>
      {remainingStock > 0 || initial > 0 ? (
        <>
          <Col sm={8}>
            <InputGroup className="mb-2 pr-0 pr-sm-2">
              <InputGroup.Prepend>
                <Button
                  disabled={counter === 1}
                  style={{
                    cursor: counter === 1 ? "not-allowed" : "pointer",
                  }}
                  onClick={restar}
                  className="modifyCounter"
                >
                  -
                </Button>
              </InputGroup.Prepend>
              <FormControl
                className="counter"
                onChange={manualChange}
                value={counter}
                placeholder="Stock"
                aria-label="Stock"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  disabled={
                    remainingStock === 0 ||
                    (!checkout && remainingStock - counter === 0)
                  }
                  style={{
                    cursor:
                      remainingStock === 0 ||
                      (!checkout && remainingStock - counter === 0)
                        ? "not-allowed"
                        : "pointer",
                  }}
                  onClick={sumar}
                  className="modifyCounter"
                >
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm={4}>
            {checkout ? (
              <ButtonComponent
                text="Eliminar del carrito"
                variant="outline-danger"
                icon={
                  <FontAwesomeIcon
                    icon={"trash-alt"}
                    title="Eliminar del carrito"
                  />
                }
                onClick={remove}
                block={true}
                textOnlyXs={true}
              />
            ) : (
              <ButtonComponent
                text="Agregar"
                variant="outline-primary"
                icon={
                  <FontAwesomeIcon
                    icon={"cart-plus"}
                    title="Agregar al carrito"
                  />
                }
                onClick={() => onAdd(counter)}
                block={true}
                textOnlyXs={true}
              />
            )}
          </Col>
        </>
      ) : (
        <Col>
          <ButtonComponent
            className="mb-2"
            text="Sin stock"
            variant="dark"
            style={{ cursor: "default" }}
            block={true}
          />
        </Col>
      )}
    </Row>
  );
};
