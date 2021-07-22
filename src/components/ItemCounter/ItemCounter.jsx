import { useState } from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonComponent } from "../Buttons/Button";
import "./styles.scss";

export const ItemCounter = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const sumar = () => {
    if (counter < stock) setCounter(counter + 1);
  };
  const restar = () => {
    if (counter > 1) setCounter(counter - 1);
  };
  const manualChange = (e) => {
    let value = e.target.value;
    if (value > 1 && value < stock) setCounter(value);
    else setCounter(stock);
  };
  return (
    <Row>
      {stock > 0 ? (
        <>
          <Col sm={5} lg={8}>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <Button onClick={restar} variant="outline-secondary">
                  -
                </Button>
              </InputGroup.Prepend>
              <FormControl
                id="counter"
                onChange={manualChange}
                value={counter}
                placeholder="Stock"
                aria-label="Stock"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button onClick={sumar} variant="outline-secondary">
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm={7} lg={4}>
            <ButtonComponent
              text="Agregar al carrito"
              variant="primary"
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
          </Col>
        </>
      ) : (
        <Col>
          <ButtonComponent
            className="mb-2"
            text="Sin stock"
            variant="dark"
            block={true}
          />
        </Col>
      )}
    </Row>
  );
};
