import React, { useContext, useState } from "react";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonComponent } from "../Buttons/Button";
import accounting from "accounting";
import { CartContext } from "../../context/CartContext/CartContext.jsx";
import "./styles.scss";

export const ItemDetail = ({ product }) => {
  const { cart, addItem } = useContext(CartContext);
  const [confirm, setConfirm] = useState(false);
  let aux = cart.find((c) => c.product.id === product.id);
  function onAdd(c) {
    setConfirm(true);
    addItem(product, c, false);
  }

  let productInCart = cart.find((e) => e.product.id === product.id);
  let remainingStock = productInCart
    ? product.stock - productInCart.qty
    : product.stock;
  return (
    <>
      <Container className="itemDetail">
        <Row noGutters>
          <Col className="py-2 px-3 px-lg-4" sm={4} md={6} lg={4}>
            <Row>
              <Col>
                <img
                  style={{ maxWidth: "100%" }}
                  src={product.img}
                  alt={product.title}
                  title={product.title}
                />
                {productInCart && (
                  <Badge className="itemDetailBadge" variant="success">
                    En carrito{" "}
                    <FontAwesomeIcon icon={"shopping-cart"} size="lg" />
                  </Badge>
                )}
              </Col>
            </Row>
          </Col>
          <Col className="px-4" sm={8} md={6} lg={8}>
            <Row className="mt-2 mt-md-3 mt-lg-4">
              <Col sm={8}>
                <p className="m-0" style={{ fontSize: 12 }}>
                  ID #{product.id}
                </p>
                <h3>{product.title}</h3>
              </Col>
              <Col className="text-md-right" sm={4}>
                <h4>
                  <Badge variant="light">
                    {accounting.formatMoney(product.price, "$")}
                  </Badge>
                </h4>
              </Col>
            </Row>
            <Row className="my-2 my-lg-4">
              <Col>{product.description}</Col>
            </Row>{" "}
            <Row className="my-1">
              <Col lg={4}>
                <p style={{ fontSize: 14 }} className="mb-0">
                  Stock disponible:
                </p>
                <p style={{ fontSize: 14 }}>
                  {" "}
                  {remainingStock}{" "}
                  {remainingStock === 1 ? "unidad" : "unidades"}
                </p>
              </Col>
              <Col lg={8}>
                {confirm || remainingStock === 0 ? (
                  <Row noGutters>
                    <Col lg={6}>
                      <Link to={"/"} style={{ textDecoration: "none" }}>
                        <ButtonComponent
                          text={`Seguir comprando`}
                          variant="outline-light"
                          icon={
                            <FontAwesomeIcon
                              icon={"shopping-cart"}
                              title="Seguir comprando"
                            />
                          }
                          block={true}
                        />
                      </Link>
                    </Col>
                    <Col lg={6}>
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
                          className="ml-0 ml-lg-1 mt-2 mt-lg-0"
                        />
                      </Link>
                    </Col>
                  </Row>
                ) : (
                  <ItemCounter
                    product={product}
                    qty={aux ? aux.qty : 0}
                    onAdd={onAdd}
                  />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
