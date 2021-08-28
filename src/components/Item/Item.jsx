import { Badge, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import accounting from "accounting";
import "./styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

export const Item = ({ product }) => {
  const { cart } = useContext(CartContext);
  let productInCart = cart.find((e) => e.product.id === product.id);
  return (
    <Link
      to={`/item/${product.id}`}
      style={{ color: "#000", textDecoration: "none" }}
    >
      <>
        <Container className="item mb-3">
          <Row noGutters>
            <Col className="p-3" xs={5} md={12}>
              {productInCart && (
                <Badge className="itemBadge" variant="success">
                  En carrito{" "}
                  <FontAwesomeIcon icon={"shopping-cart"} />
                </Badge>
              )}
              {product.stock === 0 && (
                <Badge className="itemBadge" variant="warning">
                  Sin stock
                </Badge>
              )}{" "}
              <img
                style={{ maxWidth: "100%" }}
                src={product.img}
                alt={product.title}
                title={product.title}
              />
            </Col>
            <Col className="p-3" xs={5} md={12}>
              <Row>
                <Col>
                  <h5 className="mb-0">{product.title}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6
                    className="mt-1"
                    style={{ fontWeight: 300, fontSize: 14 }}
                  >
                    {accounting.formatMoney(product.price, "$")} x un.
                  </h6>{" "}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    </Link>
  );
};
