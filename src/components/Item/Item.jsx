import { Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import accounting from "accounting";
import "./styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

export const Item = ({ product }) => {
  const { cart } = useContext(CartContext);
  let productInCart = cart.find(e => e.product.id === product.id);
  return (
    <Link
      to={`/item/${product.id}`}
      style={{ color: "#fff", textDecoration: "none" }}
    >
      <Card key={product.id} text="white" className="mb-2 p-2">
        <Card.Header>
          {productInCart && (
            <Badge className="itemBadge" variant="success">
              En carrito <FontAwesomeIcon icon={"shopping-cart"} size="lg" />
            </Badge>
          )}
          {product.stock === 0 && (
            <Badge className="itemBadge" variant="dark">
              Sin stock
            </Badge>
          )}
          <Card.Img
            style={{ maxWidth: "100%" }}
            src={product.img}
            alt={product.title}
            title={product.title}
          />
        </Card.Header>
        <Card.Body className="py-1">
          <Card.Text className="mb-1">{product.title}</Card.Text>
          <Card.Text className="mb-1">
            {accounting.formatMoney(product.price, "$")}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
