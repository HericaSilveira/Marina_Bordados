import { useState } from "react";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonComponent } from "../Buttons/Button";
import accounting from "accounting";
import "./styles.scss";

export const ItemDetail = ({ product, onAddToCart }) => {
  const [confirm, setConfirm] = useState(false);
  function onAdd(c) {
    setConfirm(true);
    onAddToCart(c);
  }
  return (
    <Container className="itemDetail">
      <Row noGutters>
        <Col className="py-2 px-4" lg={4} md={6} sm={4}>
          <Row>
            <Col>
              <img
                className="mt-1"
                style={{ maxWidth: "100%" }}
                src={product.img}
                alt={product.title}
                title={product.title}
              />
            </Col>
          </Row>
        </Col>
        <Col className="px-4" lg={8} md={6} sm={8}>
          <Row className="mt-4">
            <Col md={8}>
              <h3>{product.title}</h3>
            </Col>
            <Col className="text-md-right" md={4}>
              <h3>
                <Badge variant="light">
                  {accounting.formatMoney(product.price, "$")}
                </Badge>
              </h3>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>{product.description}</Col>
          </Row>{" "}
          <Row className="my-4">
            <Col lg={6} style={{ verticalAlign: "middle" }}>
              <p>Stock: {product.stock} unidades</p>
            </Col>
            <Col lg={6}>
              {confirm ? (
                <Link to={"/cart"} style={{ textDecoration: "none" }}>
                  <ButtonComponent
                    text={`Terminar mi compra`}
                    variant="success"
                    icon={
                      <FontAwesomeIcon
                        icon={"dollar-sign"}
                        title="Terminar mi compra"
                      />
                    }
                    block={true}
                  />
                </Link>
              ) : (
                <ItemCounter stock={product.stock} initial={1} onAdd={onAdd} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
